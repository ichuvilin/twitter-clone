package com.ichuvilin.twitterclone.services.auth;

import com.ichuvilin.twitterclone.dto.UserDTO;
import com.ichuvilin.twitterclone.dto.security.AuthenticationDTO;
import com.ichuvilin.twitterclone.dto.security.RegistrationDTO;
import com.ichuvilin.twitterclone.models.User;
import com.ichuvilin.twitterclone.respository.UserRepository;
import com.ichuvilin.twitterclone.security.JwtUtil;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;
import java.util.Optional;

@Service
public class AuthService {

    private final ModelMapper modelMapper;
    private final JwtUtil jwtUtil;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authManager;

    public AuthService(ModelMapper modelMapper,
                       JwtUtil jwtUtil, UserRepository userRepository,
                       PasswordEncoder passwordEncoder, AuthenticationManager authManager) {
        this.modelMapper = modelMapper;
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authManager = authManager;
    }

    @Transactional
    public Map<String, String> registration(RegistrationDTO dto) {

        User user = convertToUser(dto);
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        userRepository.save(user);

        String token = jwtUtil.generateToken(user);

        return Map.of("token", token);
    }

    public Map<String, String> login(AuthenticationDTO dto) {
        UsernamePasswordAuthenticationToken authInputToken =
                new UsernamePasswordAuthenticationToken(dto.getUsername(), dto.getPassword());

        try {
            authManager.authenticate(authInputToken);
        } catch (BadCredentialsException e) {
            return Map.of("message", "Incorrect credentials");
        }

        Optional<User> user = userRepository.findByUsername(dto.getUsername());

        String token = jwtUtil.generateToken(user.get());

        return Map.of("token", token);
    }

    private User convertToUser(RegistrationDTO dto) {
        return modelMapper.map(dto, User.class);
    }
}
