package com.amazon.amazonservice.repository;

import com.amazon.amazonservice.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface    UserRepository extends JpaRepository<User, Long> {

//    @Query(value = "select * from user", nativeQuery = true)
//    public List<User> getUsers();

//    @Query(value = "select * from user where product_name = 'fter'", nativeQuery = true)
//    public List<User> filterByName();

    @Query("SELECT e FROM User e WHERE LOWER(e.product_name) LIKE LOWER(CONCAT('%', :product_name, '%'))")
    List<User> filterByName(@Param("product_name") String product_name);
//    @Query(value = "select * from user where product_name = ?", nativeQuery = true)
//    List<User> findByproduct_nameContainingIgnoreCase(String product_name);


        @Query(value = "select * from user where Product_price between 3000 and 5000", nativeQuery = true)
        List<User> getDataByRange();
}
