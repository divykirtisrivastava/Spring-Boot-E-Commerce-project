package com.amazon.amazonservice.controller;

import com.amazon.amazonservice.model.Admin;
import com.amazon.amazonservice.model.SignInRequest;
import com.amazon.amazonservice.repository.AdminRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:5173/")
public class AdminController {
    @Autowired
    private AdminRespository adminRespository;
    @PostMapping("/signin")
    public Boolean signIn(@RequestBody SignInRequest request) {
        Admin admin = adminRespository.findByEmail(request.getEmail());
        if (admin != null && admin.getPassword().equals(request.getPassword())) {
            return  true;
        } else {
            return false;
        }
    }
}
