/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package e3.beans;

import java.util.ArrayList;

/**
 *
 * @author dw2
 */
public class AlmacenMatrices {

    private static ArrayList<int[][]> matrices=new ArrayList<int[][]>();

    public void anyadirMatriz(int[][] matriz) {
        this.matrices.add(matriz);
    }

    public static ArrayList<int[][]> getMatrices() {
        return matrices;
    }
    
}
