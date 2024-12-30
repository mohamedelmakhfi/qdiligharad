package org.devFactory.qdiligharad.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_GATEWAY)
public class GeneralException extends RuntimeException{

    /**
     *
     */
    private static final long serialVersionUID = -8972404468144145986L;

    public GeneralException() {
        super();
    }

    public GeneralException(String message) {
        super(message);
    }

}
