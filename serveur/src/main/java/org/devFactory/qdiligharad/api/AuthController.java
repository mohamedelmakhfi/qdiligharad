package org.devFactory.qdiligharad.api;

import org.devFactory.qdiligharad.repository.RoleRepository;
import org.springframework.security.core.Authentication;
import org.devFactory.qdiligharad.config.JwtProvider;
import org.devFactory.qdiligharad.domain.Role;
import org.devFactory.qdiligharad.domain.User;
import org.devFactory.qdiligharad.repository.UserRepository;
import org.devFactory.qdiligharad.request.LoginRequest;
import org.devFactory.qdiligharad.response.AuthResponse;
import org.devFactory.qdiligharad.service.CustomUserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserDetailsImpl customUserDetails;


//    @PostMapping("/signup")
//    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {
//        User existingUser = userRepository.findByEmail(user.getEmail());
//
//        if (existingUser != null) {
//            throw new Exception("Email already exists with another account");
//        }
//
//        Set<Role> validRoles = new HashSet<>();
//        for (Role role : user.getRoles()) {
//            Role existingRole = roleRepository.findByName(role.getName());
//
//            if (existingRole == null) {
//                throw new Exception("Role " + role.getName() + " does not exist");
//            }
//            validRoles.add(existingRole);
//        }
//
//        User createdUser = new User();
//        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
//        createdUser.setEmail(user.getEmail());
//        createdUser.setFullName(user.getFullName());
//        createdUser.setRoles(validRoles);
//
//        User savedUser = userRepository.save(createdUser);
//
//        // Load the UserDetails for the created user to include roles
//        UserDetails userDetails = customUserDetails.loadUserByUsername(savedUser.getEmail());
//
//        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        String jwt = JwtProvider.generateToken(authentication);
//
//        String role = userDetails.getAuthorities().stream()
//                .map(GrantedAuthority::getAuthority)
//                .collect(Collectors.joining(", "));
//
//        AuthResponse res = new AuthResponse();
//        res.setJwt(jwt);
//        res.setMessage("Signup success");
//
//        res.setRole(role);
//
//        return new ResponseEntity<>(res, HttpStatus.CREATED);
//    }

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {
        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            throw new Exception("Email already exists with another account");
        }

        List<Role> validRoles = new ArrayList<>();
        for (Role role : user.getRoles()) {
            Role existingRole = roleRepository.findByName(role.getName());

            if (existingRole == null) {
                throw new Exception("Role " + role.getName() + " does not exist");
            }
            validRoles.add(existingRole);
        }

        User createdUser = new User();
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());
        createdUser.setRoles(validRoles);

        User savedUser = userRepository.save(createdUser);

        UserDetails userDetails = customUserDetails.loadUserByUsername(savedUser.getEmail());

        Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);

        String role = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(", "));

        AuthResponse res = new AuthResponse();
        res.setJwt(jwt);
        res.setMessage("Signup success");
        res.setRole(role);

        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }



    @PostMapping("/signing")
    public ResponseEntity<AuthResponse> signing(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = JwtProvider.generateToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String role = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(", "));

        AuthResponse res = new AuthResponse();
        res.setMessage("Signing success");
        res.setJwt(jwt);
        res.setRole(role);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);

        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username");
        }

        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid password");
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
