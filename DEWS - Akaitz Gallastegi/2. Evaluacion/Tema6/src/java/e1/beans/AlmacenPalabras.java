package e1.beans;

public class AlmacenPalabras {
    
    private static String palabras[]=new String[]{"envase","amanecer","positivo"};
    
    public String palabraAleatoria(){
        int cant=palabraAleatoria().length();
        int num=(int)(Math.random()*cant);
        return palabras[num];
    }
}
