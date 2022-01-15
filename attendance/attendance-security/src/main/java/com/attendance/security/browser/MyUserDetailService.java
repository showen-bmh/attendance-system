package com.attendance.security.browser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class MyUserDetailService implements UserDetailsService {

    @Autowired
    PasswordEncoder passwordEncoder;

    private String password = passwordEncoder.encode("123456");

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        UserInfo userInfo = userInfoService.getByUsername(username);
//        if (userInfo == null) {
//            throw new UsernameNotFoundException("用户名或密码不存在");
//        }
//        return new AccountUser(userInfo.getUserId(), userInfo.getUsername(), userInfo.getPassword(), getUserAuthority(userInfo.getUserId()));
        return new User("admin", password, true, true, true, false, AuthorityUtils.commaSeparatedStringToAuthorityList("admin"));
    }
}
