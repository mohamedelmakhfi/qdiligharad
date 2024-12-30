package org.devFactory.qdiligharad.exception;

import org.devFactory.qdiligharad.utils.ErrorMessageProvider;

import java.util.HashMap;
import java.util.Map;

public class ExceptionConstants {
    private static final Map<String, ErrorMessageProvider> errorMessages = new HashMap<>();
    static {
        //errorMessages.put("BAD_REQUEST", (name) -> String.format("Pour mettre à jour un %s, l'identifiant est obligatoire", name));
        errorMessages.put("BAD_REQUEST", (name) -> String.format("BAD_REQUEST"));
        errorMessages.put("INTERNAL_SERVER_ERROR", (id) -> String.format("INTERNAL_SERVER_ERROR"));
        errorMessages.put("NOT_FOUND", (name) -> String.format("%s NOT_FOUND", name));
    }
    public static ErrorMessageProvider getErrorMessageProvider(String key) {
        return errorMessages.get(key);
    }
}
