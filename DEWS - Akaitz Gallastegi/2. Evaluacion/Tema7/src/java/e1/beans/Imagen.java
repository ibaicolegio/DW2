package e1.beans;

public class Imagen {
    private String ruta, nombre;
    private long tamanyo;

    public Imagen(String ruta, String nombre, long tamanyo) {
        this.ruta = ruta;
        this.nombre = nombre;
        this.tamanyo = tamanyo;
    }

    public String getRuta() {
        return ruta;
    }

    public String getNombre() {
        return nombre;
    }

    public long getTamanyo() {
        return tamanyo;
    }
    
    public String tamanioDesglosado(){
        String msg="";
        double bytes = tamanyo%1024;
        msg=bytes+" bytes ";
        if(tamanyo>1024){
            double Kb = tamanyo/1024%1024;
            msg=Kb+" Kb "+msg;
        }
        if(tamanyo>(1024*1024)){
            double Mb = tamanyo/1024/1024%1024;
            msg=Mb+" Mb "+msg;
        }
        return msg;
    }
    
    
}
