package e4.beans;

import java.util.ArrayList;
import java.util.Arrays;

public class Primitiva {
    
    private Fecha fecha;
    private int[] numerosGanadores;
    private int reintegro;

    public Primitiva(Fecha fecha) {
        this.fecha = fecha;
        
        //No hay numeros repetidos
        ArrayList<Integer> numeros=new ArrayList<Integer>();
        for (int i = 0; i < 6; i++) {
            int num=(int)(Math.random()*48+1);
            do{
                num=(int)(Math.random()*48+1);
            } while(numeros.contains(num));
            numeros.add(num);
        }
        this.numerosGanadores=new int[6];
        Arrays.sort(numerosGanadores);
        int i=0;
        for (Integer numero : numeros) {
            this.numerosGanadores[i]=numero;
            i++;
        }
        
        //Generar reintegro
        this.reintegro = (int)(Math.random()*9);;
    }
    
    
    
}
