package org.devFactory.qdiligharad.commons;

import java.util.UUID;

public class ToolsOperation {

    public String generateUniqueString() {
        return UUID.randomUUID().toString().substring(0, 12);
    }

    public String getExtension(String fileName) {
        return fileName.substring(fileName.lastIndexOf(".") + 1);
    }

    public String nvl(String firstString, String secondString) {
        if (firstString == null) {
            return secondString;
        } else {
            return firstString;
        }
    }
}
