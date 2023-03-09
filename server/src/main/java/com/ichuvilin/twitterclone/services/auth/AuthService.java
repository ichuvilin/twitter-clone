package com.ichuvilin.twitterclone.services.auth;

import com.ichuvilin.twitterclone.dto.security.AuthenticationDTO;
import com.ichuvilin.twitterclone.dto.security.RegistrationDTO;
import com.ichuvilin.twitterclone.models.User;
import com.ichuvilin.twitterclone.payload.response.JwtResponse;
import com.ichuvilin.twitterclone.respository.UserRepository;
import com.ichuvilin.twitterclone.middleware.JwtUtils;
import com.ichuvilin.twitterclone.security.impl.UserDetailsImpl;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AuthService {

    private final ModelMapper modelMapper;
    private final JwtUtils jwtUtils;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authManager;

    public AuthService(ModelMapper modelMapper,
                       JwtUtils jwtUtils, UserRepository userRepository,
                       PasswordEncoder passwordEncoder, AuthenticationManager authManager) {
        this.modelMapper = modelMapper;
        this.jwtUtils = jwtUtils;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authManager = authManager;
    }

    @Transactional
    public ResponseEntity<?> registration(RegistrationDTO dto) {
        if (userRepository.existsByUsername(dto.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Username is already taken!");
        }

        if (userRepository.existsByEmail(dto.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body("Error: Email is already in use!");
        }

        User user = convertToUser(dto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        return ResponseEntity.ok("User registered successfully!");

    }

    public ResponseEntity<?> login(AuthenticationDTO dto) {
        Authentication authentication = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getUser().getId(),
                userDetails.getUsername(),
                userDetails.getUser().getEmail()));
    }

    private User convertToUser(RegistrationDTO dto) {
        return modelMapper.map(dto, User.class);
    }
}
