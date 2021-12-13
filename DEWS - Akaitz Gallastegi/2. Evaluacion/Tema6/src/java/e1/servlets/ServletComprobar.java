/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package e1.servlets;

import e1.beans.AlmacenPalabras;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class ServletComprobar extends HttpServlet {
    /*int vidas=(Integer)session.getAttribute("vidas");
                String palabraAleatoria=(String)session.getAttribute("palabraAleatoria");
                char palabraSeparada[]=(char[])session.getAttribute("palabraSeparada");
                ArrayList<Integer> posiciones=(ArrayList<Integer>)session.getAttribute("posiciones");
                boolean ganado=(boolean)session.getAttribute("ganado");
                boolean perdido=(boolean)session.getAttribute("perdido");*/
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session = request.getSession(true);
        try (PrintWriter out = response.getWriter()) {
            if((boolean)session.getAttribute("ganado") || (boolean)session.getAttribute("perdido")){
                session.setAttribute("ganado", false);
                session.setAttribute("perdido", false);
            }
            if(request.getParameter("pos")!=null){
                if((Integer)session.getAttribute("vidas")>0){
                    int vidas=(Integer)session.getAttribute("vidas");
                    ArrayList<Integer> posiciones=(ArrayList<Integer>)session.getAttribute("posiciones");
                    posiciones.add(Integer.parseInt(request.getParameter("pos")));
                    vidas--;
                    session.setAttribute("vidas", vidas);
                    session.setAttribute("posiciones", posiciones);
                } else {
                    session.setAttribute("perdido", true);
                }
            }
            if(request.getParameter("comprobar")!=null){
                if((Integer)session.getAttribute("vidas")>0){
                    if(request.getParameter("palabra").equalsIgnoreCase((String)session.getAttribute("palabraAleatoria"))){
                        session.setAttribute("ganado", true);
                    } else {
                        int vidas=(Integer)session.getAttribute("vidas");
                        vidas--;
                        session.setAttribute("vidas", vidas);
                    }
                } else {
                    session.setAttribute("perdido", true);
                }
            }
            if((boolean)session.getAttribute("ganado") || (boolean)session.getAttribute("perdido")){
                String palabraAleatoria=new AlmacenPalabras().palabraAleatoria();
                char palabraSeparada[]=new char[palabraAleatoria.length()];
                ArrayList<Integer> posiciones=new ArrayList<Integer>();
                int vidas=palabraAleatoria.length()/2;
                session.setAttribute("vidas", vidas);
                session.setAttribute("palabraAleatoria", palabraAleatoria);
                session.setAttribute("palabraSeparada", palabraSeparada);
                session.setAttribute("posiciones", posiciones);
            }
            for (int i = 0; i < ((String)session.getAttribute("palabraAleatoria")).length(); i++) {
                ((char[])session.getAttribute("palabraSeparada"))[i]=((String)session.getAttribute("palabraAleatoria")).charAt(i);
            }
            response.sendRedirect(request.getContextPath()+"/ServletJuego");
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
