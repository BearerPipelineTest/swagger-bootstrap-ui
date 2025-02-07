/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.aggre.core.pojo;

import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * Basic验证属性
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/11/18 19:17
 * @since:knife4j-aggregation-spring-boot-starter 2.0.8
 */
@ConfigurationProperties(prefix = "knife4j.basic-auth")
public class BasicAuth {
    /**
     * 是否开启验证
     */
    private boolean enable=false;
    /**
     * Basic用户名
     */
    private String username;
    /**
     * Basic密码
     */
    private String password;

    public boolean isEnable() {
        return enable;
    }

    public void setEnable(boolean enable) {
        this.enable = enable;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("BasicAuth{");
        sb.append("enable=").append(enable);
        sb.append(", username='").append(username).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append('}');
        return sb.toString();
    }
}
