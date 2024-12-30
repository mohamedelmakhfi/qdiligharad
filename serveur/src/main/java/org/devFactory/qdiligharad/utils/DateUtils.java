package org.devFactory.qdiligharad.utils;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtils {
	
	private static final SimpleDateFormat format = new SimpleDateFormat(Constantes.DATE_FORMAT_DD_MM_YYYY);

	private static final SimpleDateFormat format1 = new SimpleDateFormat(Constantes.DATE_FORMAT_YYYY_MM_DD);
	private static final SimpleDateFormat formatWithHour = new SimpleDateFormat(Constantes.DATE_FORMAT_DD_MM_YYYY_HH_MM);

	public static String getDateFormatedDDMMYYYY(Date date) {
		try {
			return format.format(date);
		} catch (Exception e) {
			throw e;
		}
	}

	public static String getDateFormatedDDMMYYYYHHMM(Date date) {
		try {
			if(date == null) {
				return null;
			}
			return formatWithHour.format(date);
		} catch (Exception e) {
			throw e;
		}
	}
	
	public static Date getDateParsedDDMMYYYY(String date) throws ParseException {
		try {
			return format.parse(date);
		} catch (ParseException e) {
			throw e;
		}
		
	}

    public static Date getDateParsedYYYYMMDD(String dateCreationDe) throws ParseException {
		try {
			return format1.parse(dateCreationDe);
		} catch (ParseException e) {
			throw e;
		}
    }
}
