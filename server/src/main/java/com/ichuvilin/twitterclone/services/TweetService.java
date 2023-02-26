package com.ichuvilin.twitterclone.services;

import com.ichuvilin.twitterclone.dto.TweetDTO;
import com.ichuvilin.twitterclone.models.Tweet;
import com.ichuvilin.twitterclone.models.User;
import com.ichuvilin.twitterclone.respository.TweetRepository;
import com.ichuvilin.twitterclone.respository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TweetService {

    private final TweetRepository tweetRepository;
    private final UserRepository userRepository;

    public TweetService(TweetRepository tweetRepository, UserRepository userRepository) {
        this.tweetRepository = tweetRepository;
        this.userRepository = userRepository;
    }

    public List<Tweet> getAllTweets() {
        return tweetRepository.findAll();
    }

    @Transactional
    public Tweet createTweet(TweetDTO dto) {

        Optional<User> user =  userRepository.findById(dto.getUserId());

        if (user.isPresent()) {
            Tweet tweet = new Tweet();

            tweet.setText(dto.getText());
            tweet.setUser(user.get());

            tweetRepository.save(tweet);

            return tweet;
        }
        return null;
    }

    public Tweet updateTweet(Long id, Tweet tweet) {
        return null;
    }

    public void deleteTweet(Long id) {
    }

    public List<Tweet> getAllTweetsByUser(Long id) {
        List<Tweet> tweetsByUser = tweetRepository.findAll().stream().filter(e -> e.getUser().getId() == id).toList();
        return tweetsByUser;
    }
}
