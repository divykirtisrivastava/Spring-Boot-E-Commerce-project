package com.amazon.amazonservice.service;

import com.amazon.amazonservice.model.User;
import com.amazon.amazonservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired

    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }
}