package org.ingesis.appnoticias.model;


public class SignInResponse {
    private String jwt;

    public SignInResponse(String jwt) {
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}