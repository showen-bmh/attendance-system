package com.attendance.admin.validator;

import org.springframework.validation.ObjectError;

import java.util.List;

public class ValidateException extends RuntimeException {

    private static final long serialVersionUID = -2859913957101459616L;

    private List<ObjectError> errors;

    public ValidateException(List<ObjectError> errors) {
        this.errors = errors;
    }

    public List<ObjectError> getErrors() {
        return errors;
    }

    public void setErrors(List<ObjectError> errors) {
        this.errors = errors;
    }

}
