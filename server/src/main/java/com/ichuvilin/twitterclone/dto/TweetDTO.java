package com.ichuvilin.twitterclone.dto;

import com.ichuvilin.twitterclone.models.User;

public class TweetDTO {

    private String text;

    private Long userId;

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUser(Long user) {
        this.userId = user;
    }

    @Override
    public String toString() {
        return "TweetDTO{" +
                "text='" + text + '\'' +
                ", userId=" + userId +
                '}';
    }
}
