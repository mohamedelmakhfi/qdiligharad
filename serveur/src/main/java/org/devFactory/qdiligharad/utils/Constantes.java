package org.devFactory.qdiligharad.utils;

public class Constantes {
    public static final int DEFAULT_PAGE_SIZE = 10;
    public static final String DATE_FORMAT_DD_MM_YYYY ="dd-MM-yyyy";
    public static final String DATE_FORMAT_DD_MM_YYYY_HH_MM = "dd-MM-yyyy HH:mm";
    public static final String DATE_FORMAT_YYYY_MM_DD ="yyyy-MM-dd";
    public static final String EMAIL_FORMAT = "^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$";
    public static final String TELEPHONE_FORMAT = "^(\\+\\d{1,3}[- ]?)?\\d{8,15}$";
    public static final ErrorMessageProvider REQUIRED_FIRLD = (name) -> String.format("%s est obligatoire", name);
    public static final ErrorMessageProvider INVALID_EMAIL = (name) -> String.format("%s invalide", name);
    public static final ErrorMessageProvider INVALID_TELEPHONE = (name) -> String.format("%s invalide", name);
    public static final ErrorMessageProvider INVALID_LENGTH = (name) -> String.format("%s doit avoir 15 caractères", name);
}
