/**
 *
 */
package com.attendance.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author jiangwen
 *
 */

@EnableSwagger2
@SpringBootApplication
@ComponentScan({"com.attendance.*"})
public class AttendanceApplication {

    /**
     * @param args
     */
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        SpringApplication.run(AttendanceApplication.class, args);
    }

}
