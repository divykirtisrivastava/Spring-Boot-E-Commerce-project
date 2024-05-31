package com.amazon.amazonservice.repository;

import com.amazon.amazonservice.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CArtRepository extends JpaRepository<Cart, Long> {
}
