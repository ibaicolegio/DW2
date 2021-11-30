/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package e3.servlets;

import e3.beans.AlmacenMatrices;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author dw2
 */
public class GuardaMatriz extends HttpServlet {

    private AlmacenMatrices almacenMatrices=new AlmacenMatrices();
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        String error="", celda;
        int columnas=Integer.parseInt(request.getParameter("columnas"));
        int filas=Integer.parseInt(request.getParameter("filas"));
        int matriz[][]=new int[filas][columnas];
        int cantidad=0;
        try{
            for (int f = 1; f <= filas; f++) {
                for (int c = 1; c <= columnas; c++) {
                    celda="celda"+(f)+"-"+(c);
                    matriz[f-1][c-1]=Integer.parseInt(request.getParameter(celda));
                }
            }
            almacenMatrices.anyadirMatriz(matriz);
            cantidad=almacenMatrices.getMatrices().size();
        }catch (Exception e){
            System.out.println(e);
            error+="Debes rellenar correctamente la matriz";
        }
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet GuardaMatriz</title>");            
            out.println("</head>");
            out.println("<body>");
            if(!error.isEmpty()){
                out.println("<p style='color: red'>"+error+"</p>");
            } else{
                out.println("<p>Tu matrzi de "+filas+"x"+columnas+" ha sido guardada</p>");
                out.println("<p>Hay un total de "+cantidad+" matrices</p>");
                out.println("<a href='E3/index.html'>INTRODUCE OTRA MATRIZ</a>");
                out.println("<a href='VisorMatrices'>VER MATRICES</a>");
            }
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
