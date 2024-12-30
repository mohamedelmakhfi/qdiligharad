package org.devFactory.qdiligharad.api;

import org.devFactory.qdiligharad.domain.User;
import org.devFactory.qdiligharad.dto.UserDto;
import org.devFactory.qdiligharad.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/client")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/profile")
    public ResponseEntity<UserDto> getUserProfile(@RequestHeader("Authorization") String token) throws Exception {
        UserDto user = userService.findUserProfileByJwt(token);
        return  new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/{email}")
    public UserDto getUserByEmail(@PathVariable String email) throws Exception {
        return userService.findUserByEmail(email);
    }

    @GetMapping("/id/{id}")
    public UserDto getUserById(@PathVariable Long id) throws Exception {
        return userService.findUserById(id);
    }

//    @GetMapping("/id/{id}")
//    public ResponseEntity<User> getUserById(@PathVariable Long id) throws Exception {
//        User user = userService.getUserById(id);
//        return ResponseEntity.ok(user);
//    }
}
