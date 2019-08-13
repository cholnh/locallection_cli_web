package com.mrporter.locallection_cli_web;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.Locale;
import java.util.TimeZone;

@Slf4j
@SpringBootApplication
public class LocallectionCliWebApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(LocallectionCliWebApplication.class, args);
    }

    @PostConstruct
    /* 초기화 */
    public void initApplication() {
        /* TZ */
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
        Locale.setDefault(Locale.KOREA);
    }

    @Override
    /* 구동 시점에 실행되는 코드 */
    public void run(String... args) throws Exception {
    }
}
