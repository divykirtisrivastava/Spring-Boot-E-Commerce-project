package com.amazon.amazonservice.controller;


import com.amazon.amazonservice.exception.UserNotFoundException;
import com.amazon.amazonservice.model.Cart;
import com.amazon.amazonservice.repository.CArtRepository;
import com.amazon.amazonservice.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")
public class CartController {

    @Autowired



    private CArtRepository cArtRepository;

    @PostMapping("/cart")
    Cart newCart(@RequestBody Cart newCart){
        return cArtRepository.save(newCart);
    }
    @GetMapping("/cart")
    List<Cart> getAllCarts(){
        return cArtRepository.findAll();
    }



    @DeleteMapping("/cart/{id}")
    String deleteUser(@PathVariable Long id){
        if(!cArtRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        cArtRepository.deleteById(id);
        return "User with id "+id+" has been deleted success.";
    }

}
