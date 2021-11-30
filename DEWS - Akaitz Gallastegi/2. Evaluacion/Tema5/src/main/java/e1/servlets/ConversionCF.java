package e1.servlets;

public class ConversionCF {
    
    private float celsius;
    private float fahrenheit;

    public ConversionCF(char tipo, float temperatura) {
        if(tipo=='c'){
            this.celsius = temperatura;
            this.fahrenheit=(celsius * 9/5) + 32;
            
        } else if(tipo=='f'){
            this.fahrenheit = temperatura;
            this.celsius= (fahrenheit - 32) * 5/9;
        }
    }

    public float getCelsius() {
        return celsius;
    }

    public float getFahrenheit() {
        return fahrenheit;
    }
}
