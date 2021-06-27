/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.aggre.repository;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.thread.ThreadUtil;
import cn.hutool.core.util.StrUtil;
import com.github.xiaoymin.knife4j.aggre.core.RouteDispatcher;
import com.github.xiaoymin.knife4j.aggre.core.common.RouteUtils;
import com.github.xiaoymin.knife4j.aggre.core.pojo.BasicAuth;
import com.github.xiaoymin.knife4j.aggre.core.pojo.SwaggerRoute;
import com.github.xiaoymin.knife4j.aggre.eureka.EurekaApplication;
import com.github.xiaoymin.knife4j.aggre.eureka.EurekaInstance;
import com.github.xiaoymin.knife4j.aggre.eureka.EurekaRoute;
import com.github.xiaoymin.knife4j.aggre.spring.support.EurekaSetting;
import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;
import org.apache.http.HttpStatus;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Type;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/11/16 22:56
 * @since:knife4j-aggregation-spring-boot-starter 2.0.8
 */
public class EurekaRepository extends AbsctractRepository {

    private volatile boolean stop=false;
    private Thread thread;

    Logger logger= LoggerFactory.getLogger(EurekaRepository.class);
    private EurekaSetting eurekaSetting;


    public EurekaRepository(EurekaSetting eurekaSetting){
        this.eurekaSetting=eurekaSetting;
        if (eurekaSetting!=null&& CollectionUtil.isNotEmpty(eurekaSetting.getRoutes())){
            if (StrUtil.isBlank(eurekaSetting.getServiceUrl())){
                throw new RuntimeException("Eureka ServiceUrl can't empty!!!");
            }
            //从注册中心进行初始化获取EurekaApplication
            initEurekaApps(eurekaSetting);
        }
    }

    /**
     * 从eureka注册中心获取服务列表
     * @param eurekaSetting 配置
     * @return 服务列表
     */
    private List<EurekaApplication> getApplications(EurekaSetting eurekaSetting){
        List<EurekaApplication> eurekaApps=null;
        StringBuilder requestUrl=new StringBuilder();
        requestUrl.append(eurekaSetting.getServiceUrl());
        if (!StrUtil.endWith(eurekaSetting.getServiceUrl(), RouteDispatcher.ROUTE_BASE_PATH)){
            requestUrl.append(RouteDispatcher.ROUTE_BASE_PATH);
        }
        requestUrl.append("apps");
        String eurekaMetaApi=requestUrl.toString();
        if (logger.isDebugEnabled()){
            logger.debug("Eureka meta api:{}",eurekaMetaApi);
        }
        HttpGet get=new HttpGet(eurekaMetaApi);
        //指定服务端响应JSON格式
        get.addHeader("Accept","application/json");
        try {
            //判断是否开启basic认证
            if (eurekaSetting.getServiceAuth()!=null&&eurekaSetting.getServiceAuth().isEnable()){
                get.addHeader("Authorization", RouteUtils.authorize(eurekaSetting.getServiceAuth().getUsername(),eurekaSetting.getServiceAuth().getPassword()));
            }
            CloseableHttpResponse response=getClient().execute(get);
            if (response!=null){
                int statusCode=response.getStatusLine().getStatusCode();
                if (logger.isDebugEnabled()){
                    logger.debug("Eureka Response code:{}",statusCode);
                }
                if (statusCode== HttpStatus.SC_OK){
                    String content= EntityUtils.toString(response.getEntity(),"UTF-8");
                    if (logger.isDebugEnabled()){
                        logger.debug("Eureka Response Content:{}",content);
                    }
                    if (StrUtil.isNotBlank(content)){
                        JsonElement jsonElement= JsonParser.parseString(content);
                        if (jsonElement!=null&&jsonElement.isJsonObject()){
                            JsonElement applications=jsonElement.getAsJsonObject().get("applications");
                            if (applications!=null&&applications.isJsonObject()){
                                JsonElement application=applications.getAsJsonObject().get("application");
                                if (application!=null){
                                    Type type=new TypeToken<List<EurekaApplication>>(){}.getType();
                                    eurekaApps=new Gson().fromJson(application,type);
                                }
                            }
                        }

                    }
                }
            }
        } catch (Exception e) {
            //error
            logger.error("load Register Metadata from Eureka Error,message:"+e.getMessage(),e);
        }
        return eurekaApps;
    }


    private Map<String, SwaggerRoute> applySwaggerRoutes(List<EurekaApplication> eurekaApps){
        Map<String, SwaggerRoute> swaggerRouteMap=new HashMap<>();
        //获取服务列表
        List<String> serviceNames=eurekaSetting.getRoutes().stream().map(EurekaRoute::getServiceName).map(String::toLowerCase).collect(Collectors.toList());
        for (EurekaApplication eurekaApplication:eurekaApps){
            //判断当前instance不可为空，并且取status="UP"的服务
            if (serviceNames.contains(eurekaApplication.getName().toLowerCase())&&CollectionUtil.isNotEmpty(eurekaApplication.getInstance())){
                Optional<EurekaInstance> instanceOptional=eurekaApplication.getInstance().stream().filter(eurekaInstance -> StrUtil.equalsIgnoreCase(eurekaInstance.getStatus(),"up")).findFirst();
                if (instanceOptional.isPresent()){
                    //根据服务配置获取外部setting
                    Optional<EurekaRoute> eurekaRouteOptional=eurekaSetting.getRoutes().stream().filter(eurekaRoute -> StrUtil.equalsIgnoreCase(eurekaRoute.getServiceName(),eurekaApplication.getName())).findFirst();
                    if (eurekaRouteOptional.isPresent()){
                        EurekaRoute eurekaRoute=eurekaRouteOptional.get();
                        EurekaInstance eurekaInstance=instanceOptional.get();
                        if (eurekaRoute.getRouteAuth()==null||!eurekaRoute.getRouteAuth().isEnable()){
                            eurekaRoute.setRouteAuth(eurekaSetting.getRouteAuth());
                        }
                        //转换为SwaggerRoute
                        swaggerRouteMap.put(eurekaRoute.pkId(),new SwaggerRoute(eurekaRoute,eurekaInstance));
                    }
                }
            }
        }
        return swaggerRouteMap;
    }

    /**
     * 初始化
     * @param eurekaSetting eureka配置
     */
    private void initEurekaApps(EurekaSetting eurekaSetting){
        List<EurekaApplication> eurekaApps=getApplications(eurekaSetting);
        if (CollectionUtil.isNotEmpty(eurekaApps)){
            //根据EurekaApplication转换为Knife4j内部SwaggerRoute结构
            Map<String, SwaggerRoute> swaggerRouteMap=applySwaggerRoutes(eurekaApps);
            if (CollectionUtil.isNotEmpty(swaggerRouteMap)){
                for (Map.Entry<String,SwaggerRoute> swaggerRouteEntry:swaggerRouteMap.entrySet()){
                    this.routeMap.put(swaggerRouteEntry.getKey(),swaggerRouteEntry.getValue());
                }
            }
        }
    }

    @Override
    public BasicAuth getAuth(String header) {
        BasicAuth basicAuth=null;
        if (eurekaSetting!=null&&CollectionUtil.isNotEmpty(eurekaSetting.getRoutes())){
            if (eurekaSetting.getRouteAuth()!=null&&eurekaSetting.getRouteAuth().isEnable()){
                basicAuth=eurekaSetting.getRouteAuth();
                //判断route服务中是否再单独配置
                BasicAuth routeBasicAuth=getAuthByRoute(header,eurekaSetting.getRoutes());
                if (routeBasicAuth!=null){
                    basicAuth=routeBasicAuth;
                }
            }else{
                basicAuth=getAuthByRoute(header,eurekaSetting.getRoutes());
            }
        }
        return basicAuth;
    }

    public EurekaSetting getEurekaSetting() {
        return eurekaSetting;
    }

    @Override
    public void start() {
        logger.info("start Eureka heartbeat Holder thread.");
        thread=new Thread(()->{
            while (!this.stop){
                try{
                    ThreadUtil.sleep(HEART_BEAT_DURATION);
                    if (logger.isDebugEnabled()){
                        logger.debug("Knife4jAggregation Eureka heartbeat working...");
                    }
                    if (this.eurekaSetting!=null&& CollectionUtil.isNotEmpty(this.eurekaSetting.getRoutes())){
                        if (StrUtil.isBlank(this.eurekaSetting.getServiceUrl())){
                            throw new RuntimeException("Eureka ServiceUrl can't empty!!!");
                        }
                        List<EurekaApplication> eurekaApps=getApplications(this.eurekaSetting);
                        if (CollectionUtil.isNotEmpty(eurekaApps)){
                            //根据EurekaApplication转换为Knife4j内部SwaggerRoute结构
                            Map<String, SwaggerRoute> swaggerRouteMap=applySwaggerRoutes(eurekaApps);
                            if (CollectionUtil.isNotEmpty(swaggerRouteMap)){
                                //移除老的不存在或者掉线的服务
                                final Set<String> oldRouteKeys=this.routeMap.keySet();
                                for (String oldKey:oldRouteKeys){
                                    if (!swaggerRouteMap.containsKey(oldKey)){
                                        this.routeMap.remove(oldKey);
                                    }
                                }
                                //获取到了最新数据,需要匹配更新当前的列表数据
                                for (Map.Entry<String,SwaggerRoute> swaggerRouteEntry:swaggerRouteMap.entrySet()){
                                    this.routeMap.put(swaggerRouteEntry.getKey(),swaggerRouteEntry.getValue());
                                }
                            }else{
                                //没有在线服务，清空routes中的数据
                                this.routeMap.clear();
                            }
                        }else{
                            //没有在线服务，清空routes中的数据
                            this.routeMap.clear();
                        }
                    }
                }catch (Exception e){
                    logger.debug(e.getMessage(),e);
                }
            }
        });
        thread.setDaemon(true);
        thread.start();
    }

    @Override
    public void close() {
        logger.info("stop Eureka heartbeat Holder thread.");
        this.stop=true;
        if (thread!=null){
            ThreadUtil.interrupt(thread,true);
        }
    }
}
