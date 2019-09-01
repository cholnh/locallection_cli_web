package com.mrporter.locallection_cli_web.api.token.controller;

import com.mrporter.locallection_cli_web.api.token.domain.RefreshToken;
import com.mrporter.locallection_cli_web.api.token.domain.User;
import com.mrporter.locallection_cli_web.api.token.service.TokenServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/oauth/token")
@RestController
@AllArgsConstructor
public class TokenController {

    private TokenServiceImpl tokenService;

    @PostMapping("/guest")
    public ResponseEntity<?> getGuestToken() {
        return tokenService.getGuestToken();
    }

    @PostMapping("/user")
    public ResponseEntity<?> getUserToken(@RequestBody User user) {
        return tokenService.getUserToken(user);
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> getRefreshToken(@RequestBody RefreshToken refreshToken) {
        return tokenService.getRefreshToken(refreshToken);
    }
}
