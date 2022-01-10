package com.attendance.validator;

import com.attendance.service.HelloService;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class MyConstraintValidator implements ConstraintValidator<Myconstraint, Object> {

    @Autowired
    private HelloService helloService;

    @Override
    public void initialize(Myconstraint constraintAnnotation) {

        System.out.println("my validator init");
    }

    @Override
    public boolean isValid(Object value, ConstraintValidatorContext context) {

        helloService.greeting("tom");
        System.out.println(value);

        return false;
    }
}
