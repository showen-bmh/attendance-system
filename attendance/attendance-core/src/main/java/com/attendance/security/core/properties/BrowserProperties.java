package com.attendance.security.core.properties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BrowserProperties {

    private String loginPage = "/sign.html";

    private LoginResponseType loginResponseType = LoginResponseType.JSON;
}
