package com.attendance.security.core.properties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BrowserProperties {
    private String loginPage = "/demo-sign.html";
}
