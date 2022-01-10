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
        double Mb = tamanyo/1024/1024;
        double Kb = (tamanyo-Mb)/1024;
        double bytes = tamanyo-Kb-Mb;
        String tamanio = Mb+" Mb "+Kb+" Kb "+bytes+" bytes ";
        return tamanio;
    }
    
    
}
