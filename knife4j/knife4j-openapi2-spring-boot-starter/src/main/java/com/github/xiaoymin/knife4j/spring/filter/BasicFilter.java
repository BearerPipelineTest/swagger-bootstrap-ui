/*
 * Copyright (C) 2018 Zhejiang xiaominfo Technology CO.,LTD.
 * All rights reserved.
 * Official Web Site: http://www.xiaominfo.com.
 * Developer Web Site: http://open.xiaominfo.com.
 */

package com.github.xiaoymin.knife4j.spring.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.regex.Pattern;

/***
 *
 * @since:swagger-bootstrap-ui 1.9.0
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a> 
 * 2019/02/02 19:57
 */
public class BasicFilter{

    private Logger logger= LoggerFactory.getLogger(BasicFilter.class);

    protected List<Pattern> urlFilters=null;

    public BasicFilter(){
        urlFilters=new ArrayList<>();
        urlFilters.add(Pattern.compile(".*?/doc\\.html.*",Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/v2/api-docs.*",Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/v2/api-docs-ext.*",Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/swagger-resources.*",Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/swagger-ui\\.html.*",Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/swagger-resources/configuration/ui.*",Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/swagger-resources/configuration/security.*",Pattern.CASE_INSENSITIVE));
    }

    protected boolean match(String uri){
        boolean match=false;
        //考虑双斜杠的问题会绕过校验
        //https://gitee.com/xiaoym/knife4j/issues/I4XDYE
        String newUri=uri.replaceAll("/+","/");
        if (uri!=null){
            for (Pattern pattern:getUrlFilters()){
                if (pattern.matcher(newUri).matches()){
                    match=true;
                    break;
                }
            }
        }
        return match;
    }
    protected String decodeBase64(String source){
        String decodeStr=null;
        if (source!=null){
            //BASE64Decoder decoder=new BASE64Decoder();
            try {
                //byte[] bytes=decoder.decodeBuffer(source);
                byte[] bytes=Base64.getDecoder().decode(source);
                decodeStr=new String(bytes);
            } catch (Exception e) {
                logger.error(e.getMessage(),e);
            }
        }
        return decodeStr;
    }

    public List<Pattern> getUrlFilters() {
        return urlFilters;
    }
}
