package com.attendance.security.core.validate.code;

import org.springframework.security.core.AuthenticationException;

public class ValidateCodeException extends AuthenticationException {

    private static final long serialVersionUID = 2968368699931294209L;

    public ValidateCodeException(String msg) {
        super(msg);
    }
}
