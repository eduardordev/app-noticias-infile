package org.ingesis.appnoticias.message;


import java.io.Serializable;

public class ResponseMessage<T> implements Serializable {
    private boolean ok;
    private String message;

    public boolean isOk() {
        return ok;
    }

    public void setOk(boolean ok) {
        this.ok = ok;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getBody() {
        return body;
    }

    public void setBody(T body) {
        this.body = body;
    }

    private T body;
    public ResponseMessage(boolean ok, String message, T body) {
        this.ok = ok;
        this.message = message;
        this.body = body;
    }
}
