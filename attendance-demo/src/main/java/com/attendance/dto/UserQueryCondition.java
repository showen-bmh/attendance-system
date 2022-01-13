package com.attendance.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserQueryCondition implements Serializable {

    private String username;

    @ApiModelProperty(value = "用户年龄起始日")
    private int age;

    @ApiModelProperty(value = "用户年龄终止日")
    private int ageTo;

    private String xxx;
}
