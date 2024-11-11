package tn.esprit.dto;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@FeignClient(name = "express-microservice", url = "http://localhost:8090/api")
public interface UserClient {

    @RequestMapping("/users")
    public List<User> getAllUsers();

    @RequestMapping("/users/{id}")
    public User getUserById(@PathVariable String  id) ;

    @RequestMapping("/users/update/{id}")
    public User updateUser(@PathVariable String  id, @RequestBody User user) ;

    @RequestMapping("/users/delete/{id}")
    public User deleteUser(@PathVariable String  id, @RequestBody User user) ;

    @RequestMapping("/auth/signup")
    public User signup(@RequestBody User user) ;

    @RequestMapping("/auth/login")
    public User login(@RequestBody User user) ;


}
