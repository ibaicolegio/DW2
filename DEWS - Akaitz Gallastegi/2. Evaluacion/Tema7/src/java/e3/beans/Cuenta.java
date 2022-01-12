package e3.beans;

public class Cuenta {
    private String titular;
    private int saldo;

    public Cuenta(String titular, int saldo) {
        this.titular = titular;
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
