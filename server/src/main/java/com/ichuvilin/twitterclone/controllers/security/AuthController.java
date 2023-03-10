package com.ichuvilin.twitterclone.controllers.security;

import com.ichuvilin.twitterclone.dto.UserDTO;
import com.ichuvilin.twitterclone.dto.security.AuthenticationDTO;
import com.ichuvilin.twitterclone.dto.security.RegistrationDTO;
import com.ichuvilin.twitterclone.services.auth.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService, AuthenticationManager authManager) {
        this.authService = authService;
    }

    @PostMapping("/registration")
    public ResponseEntity performRegistration(@RequestBody RegistrationDTO dto) {
        return ResponseEntity.ok(authService.registration(dto));
    }

    @PostMapping("/login")
    public ResponseEntity performLogin(@RequestBody AuthenticationDTO dto) {
        return ResponseEntity.ok(authService.login(dto));
    }

}
