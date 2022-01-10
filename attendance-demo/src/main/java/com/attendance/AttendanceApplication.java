/**
 *
 */
package com.attendance;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author jiangwen
 *
 */

@SpringBootApplication
@RestController
public class AttendanceApplication {

    /**
     * @param args
     */
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        SpringApplication.run(AttendanceApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello() {
        return "hello spring security";
    }

}
