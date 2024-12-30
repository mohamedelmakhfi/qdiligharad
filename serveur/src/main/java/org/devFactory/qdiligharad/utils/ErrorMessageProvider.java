package org.devFactory.qdiligharad.utils;

@FunctionalInterface
public interface ErrorMessageProvider {
    String errorMessage(String name);
}
