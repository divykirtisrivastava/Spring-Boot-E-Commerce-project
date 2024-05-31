package com.amazon.amazonservice.repository;

import com.amazon.amazonservice.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRespository extends JpaRepository<Admin, Long> {
    Admin findByEmail(String email);
}
