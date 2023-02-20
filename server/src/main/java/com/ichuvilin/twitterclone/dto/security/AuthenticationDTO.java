package com.ichuvilin.twitterclone.dto.security;

public class AuthenticationDTO {

    private String username;

    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String usernameOrEmail) {
        this.username = usernameOrEmail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
