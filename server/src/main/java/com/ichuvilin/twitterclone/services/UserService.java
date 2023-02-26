package com.ichuvilin.twitterclone.services;

import com.ichuvilin.twitterclone.dto.UserDTO;
import com.ichuvilin.twitterclone.models.User;
import com.ichuvilin.twitterclone.respository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public UserService(UserRepository userRepository, ModelMapper modelMapper) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    public UserDTO getOneUser(Long id) {
        Optional<User> candidate = userRepository.findById(id);

        return candidate.map(this::convertToDTO).orElse(null);
    }


    private UserDTO convertToDTO(User user) {
        return modelMapper.map(user, UserDTO.class);
    }
}
