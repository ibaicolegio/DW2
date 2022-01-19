package e4.beans;

import java.util.Calendar;
import java.util.Date;

public class Fecha {
    
    private int dia, mes, anyo;

    public Fecha(int dia, int mes, int anyo) {
        this.dia = dia;
        this.mes = mes;
        this.anyo = anyo;
    }

    @Override
    public String toString() {
        return "Fecha{" + "dia=" + dia + ", mes=" + mes + ", anyo=" + anyo + '}';
    }
    
    public boolean correcta(){
        try{
            Calendar fecha=Calendar.getInstance();
            fecha.set(anyo, mes, dia);
            if(fecha.get(fecha.DAY_OF_MONTH)!=dia && fecha.get(fecha.MONTH)!=mes && fecha.get(fecha.YEAR)!=anyo){
                return false;
            }
        } catch (Exception e) {
            return false;
        }
        return true;
    }
    
}
