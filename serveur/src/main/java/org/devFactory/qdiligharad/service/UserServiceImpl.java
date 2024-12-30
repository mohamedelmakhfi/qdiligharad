package org.devFactory.qdiligharad.service;


import org.devFactory.qdiligharad.config.JwtProvider;
import org.devFactory.qdiligharad.domain.Role;
import org.devFactory.qdiligharad.domain.User;
import org.devFactory.qdiligharad.dto.UserDto;
import org.devFactory.qdiligharad.mapper.UserMapper;
import org.devFactory.qdiligharad.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;
    @Override
    public UserDto findUserProfileByJwt(String jwt) throws Exception {
        String email = JwtProvider.getEmailFromToken(jwt);
        return findUserByEmail(email);
    }

    @Override
    public UserDto findUserByEmail(String email) throws Exception {
        User user = userRepository.findByEmail(email);
        if (user == null) throw new Exception("User not found");
        return userMapper.toDto(user);
    }

    @Override
    public UserDto findUserById(Long userId) throws Exception {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (!optionalUser.isPresent()) {
            throw new Exception("User not found");
        }
        return userMapper.toDto(optionalUser.get());
    }




}

