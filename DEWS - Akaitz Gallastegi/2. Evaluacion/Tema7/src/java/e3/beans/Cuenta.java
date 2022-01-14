package e3.beans;

import java.util.Objects;

public class Cuenta {
    private String titular;
    private int saldo;

    public Cuenta() {
    }

    public String getTitular() {
        return titular;
    }

    public void setTitular(String titular) {
        this.titular = titular;
    }

    public int getSaldo() {
        return saldo;
    }

    public void setSaldo(int saldo) {
        this.saldo = saldo;
    }

    
    
    public boolean gastar(int cantidad){
        if(cantidad>saldo){
            return false;
        }
        saldo-=cantidad;
        return true;
    }
    
    public void ingresar(int cantidad){
        saldo+=cantidad;
    }  
    
}
