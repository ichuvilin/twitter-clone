package com.ichuvilin.twitterclone.controllers;

import com.ichuvilin.twitterclone.dto.TweetDTO;
import com.ichuvilin.twitterclone.models.Tweet;
import com.ichuvilin.twitterclone.services.TweetService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tweets")
public class TweetController {

    private final TweetService tweetService;

    public TweetController(TweetService tweetService) {
        this.tweetService = tweetService;
    }

    @GetMapping("")
    public List<Tweet> getAllTweets() {
        return tweetService.getAllTweets();
    }

    @GetMapping("/{id}")
    public List<Tweet> getAllTweetsByUser(@PathVariable Long id) {
        return tweetService.getAllTweetsByUser(id);
    }

    @PostMapping("/create")
    public Tweet createTweet(@RequestBody TweetDTO dto) {
        return tweetService.createTweet(dto);
    }

    @PutMapping("/{id}")
    public Tweet updateTweet(@PathVariable Long id, @RequestBody Tweet tweet) {
        return tweetService.updateTweet(id, tweet);
    }

    @DeleteMapping("/{id}")
    public void deleteTweet(@PathVariable Long id) {
        tweetService.deleteTweet(id);
    }
}
