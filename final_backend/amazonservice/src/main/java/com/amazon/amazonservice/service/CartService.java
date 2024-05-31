package com.amazon.amazonservice.service;

import com.amazon.amazonservice.model.Cart;
import com.amazon.amazonservice.repository.CArtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired

    private CArtRepository cArtRepository;

    public List<Cart> getAllCarts(){

        return cArtRepository.findAll();
    }


}
