/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.aggre.repository;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.core.util.StrUtil;
import com.github.xiaoymin.knife4j.aggre.core.RouteRepository;
import com.github.xiaoymin.knife4j.aggre.core.ext.PoolingConnectionManager;
import com.github.xiaoymin.knife4j.aggre.core.pojo.SwaggerRoute;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/11/16 22:36
 * @since:knife4j 1.0
 */
public abstract class AbsctractRepository extends PoolingConnectionManager implements RouteRepository {

    protected final Map<String, SwaggerRoute> routeMap=new HashMap<>();

    @Override
    public boolean checkRoute(String header) {
        if (StrUtil.isNotBlank(header)){
            return routeMap.containsKey(header);
        }
        return false;
    }
    @Override
    public SwaggerRoute getRoute(String header) {
        return routeMap.get(header);
    }

    @Override
    public List<SwaggerRoute> getRoutes() {
        return CollectionUtil.newArrayList(routeMap.values());
    }
}
