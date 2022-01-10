package e3.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class ProcesaApuesta extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session=request.getSession(true);
        
        ArrayList<String> partidos=null;
        if(this.getServletContext().getAttribute("partidos")!=null){
            partidos=(ArrayList<String>)this.getServletContext().getAttribute("partidos");
        }
        
        if(request.getParameter("enviarApuesta")!=null){
            for (int i = 0; i < partidos.size(); i++) {
                String valor=request.getParameter(""+i);
                session.setAttribute("partido"+i, valor);
            }
            for (int i = 0; i < partidos.size(); i++) {
                String valor=request.getParameter(""+i);
                if(valor.equals("")){
                    RequestDispatcher dispatcher = getServletContext().getRequestDispatcher("/EscribeApuesta");
                    dispatcher.forward(request, response);
                }
            }
            ArrayList<String> apuestas=new ArrayList<>();
        }
        
        
        
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ProcesaApuesta</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Apuesta guardada</h1>");
            int cont=0;
            for (String partido : partidos) {
                out.println("<p>"+partido+" "+request.getParameter(""+cont)+"</p>");
                cont++;
            }
            out.println("<a href='EscribeApuesta'>REVISAR LA APUESTA</a>");
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
