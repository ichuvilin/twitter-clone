package com.ichuvilin.twitterclone.dto;

import com.ichuvilin.twitterclone.models.User;

public class TweetDTO {

    private String text;

    private User user;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
