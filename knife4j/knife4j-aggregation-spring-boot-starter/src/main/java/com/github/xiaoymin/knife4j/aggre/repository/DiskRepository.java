/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.aggre.repository;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.io.IoUtil;
import cn.hutool.core.util.StrUtil;
import com.github.xiaoymin.knife4j.aggre.core.pojo.SwaggerRoute;
import com.github.xiaoymin.knife4j.aggre.disk.DiskRoute;
import com.github.xiaoymin.knife4j.aggre.spring.support.DiskSetting;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;
import org.springframework.core.io.support.ResourcePatternResolver;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.InputStream;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/11/17 22:16
 * @since:knife4j-aggregation-spring-boot-starter 2.0.8
 */
public class DiskRepository extends AbsctractRepository {

    Logger logger= LoggerFactory.getLogger(DiskRepository.class);

    private final ResourcePatternResolver resourceResolver = new PathMatchingResourcePatternResolver();

    public DiskRepository(DiskSetting diskSetting){
        if (diskSetting!=null&& CollectionUtil.isNotEmpty(diskSetting.getRoutes())){
            init(diskSetting);
        }
    }

    private void init(DiskSetting diskSetting) {
        for (DiskRoute diskRoute:diskSetting.getRoutes()){
            if (StrUtil.isNotBlank(diskRoute.getLocation())){
                try {
                    Resource resource=getResource(diskRoute.getLocation());
                    if (resource!=null){
                        String content=new String(readBytes(resource.getInputStream()),"UTF-8");
                        //添加分组
                        this.routeMap.put(diskRoute.pkId(),new SwaggerRoute(diskRoute,content));
                    }
                } catch (Exception e) {
                    //
                    logger.error("read err:"+e.getMessage());
                }
            }
        }
    }


    private Resource getResource(String location){
        Resource resource=null;
        try{
            Resource[] resources=resourceResolver.getResources(location);
            if (resources!=null&&resources.length>0){
                resource=resources[0];
            }else{
                resource=new FileSystemResource(new File(location));
            }
        }catch (Exception e){
            logger.error("read from resource error:"+e.getMessage());
            try{
                logger.info("read from local file:{}",location);
                //从本地读取
                resource=new FileSystemResource(new File(location));
            }catch (Exception ef){
                //ignore
            }
        }
        return resource;
    }

    private byte[] readBytes(InputStream ins){
        if (ins==null){
            return null;
        }
        ByteArrayOutputStream byteOutArr=new ByteArrayOutputStream();
        int r=-1;
        byte[] bytes = new byte[1024*1024];
        try {
            while ((r=ins.read(bytes))!=-1){
                byteOutArr.write(bytes,0,r);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        } finally {
            IoUtil.close(ins);
        }
        return byteOutArr.toByteArray();
    }

}
