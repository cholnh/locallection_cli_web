package com.mrporter.locallection_cli_web.api.token.service;

import com.mrporter.locallection_cli_web.api.token.domain.RefreshToken;
import com.mrporter.locallection_cli_web.api.token.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import javax.net.ssl.*;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;
import java.util.HashMap;
import java.util.Map;

@Service
public class TokenServiceImpl implements TokenService {

    private static final String DOMAIN = "https://localhost:9530";
    private static final String SUB_URL = "/api/v1/oauth/token";
    private static final String GUEST_AUTHORIZATION = "Basic Z3Vlc3Q6c1pFSl45RV1la2pqLnt2Yw==";
    private static final String USER_AUTHORIZATION = "Basic bG9naW46eTdGTFtNc1o+M15wKE02eg==";

    @Autowired private RestTemplate restTemplate;

    @Override
    public ResponseEntity<?> getGuestToken() {
        Map<String, String> header = new HashMap<>();
        header.put("Authorization", GUEST_AUTHORIZATION);

        MultiValueMap<String, String> body = new LinkedMultiValueMap();
        body.add("grant_type", "client_credentials");

        return sendByPost(header, body);
    }

    @Override
    public ResponseEntity<?> getUserToken(User user) {
        Map<String, String> header = new HashMap<>();
        header.put("Authorization", USER_AUTHORIZATION);

        MultiValueMap<String, String> body = new LinkedMultiValueMap();
        body.add("grant_type", "password");
        body.add("username", user.getUsername());
        body.add("password", user.getPassword());

        return sendByPost(header, body);
    }

    @Override
    public ResponseEntity<?> getRefreshToken(RefreshToken refreshToken) {
        Map<String, String> header = new HashMap<>();
        header.put("Authorization", USER_AUTHORIZATION);

        MultiValueMap<String, String> body = new LinkedMultiValueMap();
        body.add("grant_type", "refresh_token");
        body.add("refresh_token", refreshToken.getToken());

        return sendByPost(header, body);
    }

    private ResponseEntity<?> sendByPost(Map<String, String> header, MultiValueMap<String, String> body) {

        HttpHeaders headers = new HttpHeaders();
        if(header != null && !header.isEmpty()) {
            header.forEach((k, v)-> {
                headers.add(k, v);
            });
        }
        disableSslVerification();
        return restTemplate.postForEntity(
                (DOMAIN + SUB_URL),
                new HttpEntity(body, headers),
                String.class);
    }

    // localhost 내 SSL 제거
    private static void disableSslVerification() {
        try
        {
            // Create a trust manager that does not validate certificate chains
            TrustManager[] trustAllCerts = new TrustManager[] {new X509TrustManager() {
                public java.security.cert.X509Certificate[] getAcceptedIssuers() {
                    return null;
                }
                public void checkClientTrusted(X509Certificate[] certs, String authType) {
                }
                public void checkServerTrusted(X509Certificate[] certs, String authType) {
                }
            }
            };

            // Install the all-trusting trust manager
            SSLContext sc = SSLContext.getInstance("SSL");
            sc.init(null, trustAllCerts, new java.security.SecureRandom());
            HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());

            // Create all-trusting host name verifier
            HostnameVerifier allHostsValid = new HostnameVerifier() {
                public boolean verify(String hostname, SSLSession session) {
                    return true;
                }
            };

            // Install the all-trusting host verifier
            HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }
    }
}
