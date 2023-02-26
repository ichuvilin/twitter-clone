package com.ichuvilin.twitterclone.controllers;

import com.ichuvilin.twitterclone.dto.UserDTO;
import com.ichuvilin.twitterclone.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getOneUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getOneUser(id));
    }
}
