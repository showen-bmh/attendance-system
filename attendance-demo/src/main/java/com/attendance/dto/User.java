package com.attendance.dto;

import com.attendance.validator.Myconstraint;
import com.fasterxml.jackson.annotation.JsonView;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Past;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User implements Serializable {

    public interface UserSimpleView { };

    public interface UserDetailView extends UserSimpleView { };

    private String id;

    @Myconstraint(message = "这是一个测试")
    private String username;

    @NotBlank
    private String password;

    @Past(message = "生日必须是过去的时间")
    private Date birthday;

    @JsonView(UserSimpleView.class)
    public String getId() {
        return id;
    }

    @JsonView(UserSimpleView.class)
    public String getUsername() {
        return username;
    }

    @JsonView(UserSimpleView.class)
    public Date getBirthday() {
        return birthday;
    }

    @JsonView(UserDetailView.class)
    public String getPassword() {
        return password;
    }

}
