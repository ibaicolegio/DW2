package e2.servlets;

import e2.beans.Test;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


public class Resultado extends HttpServlet {


    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session=request.getSession(true);
        int numeroPregunta=(int)(session.getAttribute("numeroPregunta"))+1;
        ArrayList<Integer> respuestas=(ArrayList<Integer>)session.getAttribute("respuestas");
        Test test=(Test)session.getAttribute("test");
        respuestas.add(Integer.parseInt(request.getParameter("respuesta")));
        if(respuestas.size()!=numeroPregunta){
            numeroPregunta--;
            session.setAttribute("error","Seleccione una respueta");
        }
        if(session.getAttribute("error")!=""){
            response.sendRedirect(request.getContextPath() + "/servlets/ProcesoPregunta");
        } else {

            long tiempo=System.currentTimeMillis()-(long)session.getAttribute("tiempo");
            long segundos=TimeUnit.MILLISECONDS.toSeconds(tiempo);
            long minutos=0;
            if(segundos>60){
                minutos=segundos/60;
                segundos=segundos-(minutos*60);
            }

            int aciertos=test.comprobar(respuestas);
            String usuario=(String)session.getAttribute("nombre");
            int nPreguntas=(int)session.getAttribute("nPreguntas");



            try (PrintWriter out = response.getWriter()) {
                /* TODO output your page here. You may use following sample code. */

                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet Resultado</title>");            
                out.println("</head>");
                out.println("<body>");
                out.println("<p><strong>"+usuario+"</strong>, has acertado <strong>"+aciertos+"</strong> preguntas de un total de <strong>"+nPreguntas+"</strong></p>");
                out.println("<p>Tienes muy buenos conocimientos de cine</p>");
                if(minutos==0){
                    out.println("<p>Tiempo de respuesta: "+segundos+" segundo(s)</p>");
                } else {
                    out.println("<p>Tiempo de respuesta: "+minutos+" minuto(s) "+segundos+" segundo(s)</p>");
                }
                out.println("<a href='"+request.getContextPath()+"/E2'>NUEVO INTENTO</a>");
                out.println("</body>");
                out.println("</html>");
            }
            session.invalidate();
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
