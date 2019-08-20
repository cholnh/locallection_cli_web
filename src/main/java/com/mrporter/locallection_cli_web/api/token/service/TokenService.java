package com.mrporter.locallection_cli_web.api.token.service;

import com.mrporter.locallection_cli_web.api.token.domain.RefreshToken;
import com.mrporter.locallection_cli_web.api.token.domain.User;
import org.springframework.http.ResponseEntity;

public interface TokenService {
    ResponseEntity<?> getGuestToken();
    ResponseEntity<?> getUserToken(User user);
    ResponseEntity<?> getRefreshToken(RefreshToken refreshToken);
}
