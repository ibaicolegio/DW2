package e2.beans;

import java.util.ArrayList;

public class Test {
    
    private int nPreguntas;
    private ArrayList<Pregunta> preguntas;
    private static Pregunta[] preguntasVarias={
        new Pregunta(
                "¿Qué va hacia arriba cuando la lluvia viene hacia abajo?",
                "Se usa para no mojarse", 
                new String[]{"El paraguas","El sol","La luna","El vapor"},
                0
        ),
        new Pregunta(
                "Puedo afeitar todo el día, pero mi barba sigue viéndose igual ¿Qué soy?",
                "El la persona que corta la barba", 
                new String[]{"Un peluquero","Un policia","Un barbero","Un ladron"},
                2
        ),
        new Pregunta(
                "¿Cómo se llama a la policía en Macedonia?",
                "El metodo de llamar", 
                new String[]{"Polizia","Por fax","Pol-poliz","Por telefono"},
                3
        ),
        new Pregunta(
                "¿En qué lugar se encuentran los ríos que no tienen agua?",
                "Es un objeto", 
                new String[]{"En el desierto","En el mar","En los mapas","En la luna"},
                2
        )
        };

    public Test(int nPreguntas) {
        if(nPreguntas>preguntasVarias.length){
            nPreguntas=preguntasVarias.length;
            for (int i = 0; i < preguntasVarias.length; i++) {
                preguntas.add(preguntasVarias[i]);
            }
        } else {
            this.nPreguntas = nPreguntas;
            ArrayList<Integer> numeros=new ArrayList<>();
            preguntas=new ArrayList<Pregunta>();
            for (int i = 0; i < nPreguntas; i++) {
                int num=(int)(Math.random()*nPreguntas);
                if(!numeros.contains(num)){
                    numeros.add(num);
                    preguntas.add(preguntasVarias[num]);
                } else {
                    i--;
                }
            }
        }
    }
    
    public int comprobar(ArrayList<Integer> respuestas){
        int cont=0, cant=0;
        for (Pregunta pregunta: preguntas) {
            if(pregunta.getNumPreguntaCorrecta()==respuestas.get(cont)){
                cant++;
            }
            cont++;
        }
        return cant;
    }

    public ArrayList<Pregunta> getPreguntas() {
        return preguntas;
    }
    
    
}
