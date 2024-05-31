package com.amazon.amazonservice.controller;
import com.amazon.amazonservice.exception.UserNotFoundException;
import com.amazon.amazonservice.model.User;
import com.amazon.amazonservice.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173/")

public class  UserController {

    @Autowired

    private UserRepository userRepository;

//    @PostMapping("/user")
//    User newUser(@RequestBody User newUser){
//        return userRepository.save(newUser);
//    }
    @PostMapping("/user")
    public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile image,
                                              @RequestParam("product_name") String product_name,
                                              @RequestParam("product_type") String product_type,
                                              @RequestParam("product_color") String product_color,
                                              @RequestParam("product_price") String product_price) {
        try {
            User user = new User();
            user.setProduct_name(product_name);
            user.setProduct_type(product_type);
            user.setProduct_color(product_color);
            user.setProduct_price(product_price);
            user.setImage(image.getBytes());

            userRepository.save(user);

            return ResponseEntity.ok().body("Product uploaded successfully.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload product.");
        }
    }

    @GetMapping("/users")
    List<User> getAllUsers(){
        return  userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

@PutMapping("/user/{id}")
User UpdateUser(@RequestBody User newUser, @PathVariable Long id){
return userRepository.findById(id)
        .map(user ->{
            user.setProduct_name(newUser.getProduct_name());
            user.setProduct_type(newUser.getProduct_type());
            user.setProduct_color(newUser.getProduct_color());
            user.setProduct_price(newUser.getProduct_price());
            return userRepository.save(user);
        }).orElseThrow(()->new UserNotFoundException(id));
}

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable Long id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return "User with id "+id+" has been deleted success.";
    }
//@GetMapping("/sql")
//List<User> getSql(){
//    return  userRepository.getUsers();
//}

//    @GetMapping("/filter")
//    List<User> filterEntities() {
//        return userRepository.filterByName();
//    }

    @GetMapping("/puma")
    List<User> puma() {
        return userRepository.filterByName("puma");
    }
    @GetMapping("/nike")
    List<User> nike() {
        return userRepository.filterByName("nike");
    }


    @GetMapping("/search/{product_name}")
    public List<User> searchUsers(@PathVariable String product_name) {
        return userRepository.filterByName(product_name);
    }

    @GetMapping("/range")
    List<User> range() {
        return userRepository.getDataByRange();
    }
}