package com.example.springboot.utils;

import org.springframework.http.ResponseEntity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseObject<T> {

    private ResponseEntity<T> responseEntity;

    private String code;

    public ResponseObject(ResponseEntity<T> responseEntity, String code) {
        this.responseEntity = responseEntity;
        this.code = code;
    }

}
