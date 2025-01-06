package org.ingesis.appnoticias.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.ingesis.appnoticias.dto.AuthenticateRequestDTO;
import org.ingesis.appnoticias.dto.AuthenticateResponseDTO;
import org.ingesis.appnoticias.exception.AuthException;
import org.ingesis.appnoticias.model.AuthRequest;
import org.ingesis.appnoticias.model.AuthResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<AuthenticateResponseDTO> authenticate(@RequestBody AuthenticateRequestDTO authenticateRequestDTO) throws AuthException {

        AuthRequest authRequest = new AuthRequest(
                authenticateRequestDTO.getUsername(),
                authenticateRequestDTO.getPassword()
        );
        AuthResponse authResponse = authenticateUser(authRequest);
        AuthenticateResponseDTO responseDTO = new AuthenticateResponseDTO();
        responseDTO.setToken(authResponse.getToken());
        responseDTO.setMessage(authResponse.getMessage());

        return ResponseEntity.ok(responseDTO);
    }

    private AuthResponse authenticateUser(AuthRequest authRequest){
        if ("user".equals(authRequest.getUsername()) && "password".equals(authRequest.getPassword())) {
            String token = generateToken(authRequest.getUsername());
            return new AuthResponse(token, "Authentication successful!");
        } else {
            return new AuthResponse(null, "Invalid credentials");
        }
    }

    private String generateToken(String username) {
        long expirationTime = 1000 * 60 * 60;

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(SignatureAlgorithm.HS512, "secretKey")
                .compact();
    }
}
