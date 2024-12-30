package org.devFactory.qdiligharad.commons;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.context.support.ResourceBundleMessageSource;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Component
public class ResourceUtil {
    private static ResourceBundleMessageSource messageSource;

    @Autowired
    ResourceUtil(ResourceBundleMessageSource messageSource) {
        ResourceUtil.messageSource = messageSource;
    }

    public static String getMessage(String msg) {
        Locale locale = LocaleContextHolder.getLocale();
        return messageSource.getMessage(msg, (Object[])null, locale);
    }

    public static String getMessage(String msg, Object[] args) {
        Locale locale = LocaleContextHolder.getLocale();
        return messageSource.getMessage(msg, args, locale);
    }
}

