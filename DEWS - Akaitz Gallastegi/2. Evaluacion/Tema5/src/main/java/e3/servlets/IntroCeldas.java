package e3.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class IntroCeldas extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        if(request.getParameter("filas").isEmpty() || request.getParameter("columnas").isEmpty()){
            response.sendRedirect(request.getContextPath()+"/E3/index.html");
        } else {
            try (PrintWriter out = response.getWriter()) {
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet IntroCeldas</title>");            
                out.println("</head>");
                out.println("<body>");
                out.println("<h1>INTRODUCE VALORES</h1>");
                int filas=Integer.parseInt(request.getParameter("filas"));
                int columnas=Integer.parseInt(request.getParameter("columnas"));
                out.println("<form action='GuardaMatriz' method='POST'>");
                out.println("<input type='hidden' name='columnas' value='"+request.getParameter("columnas")+"'>");
                out.println("<input type='hidden' name='filas' value='"+request.getParameter("filas")+"'>");
                if(request.getParameter("gris")!=null){
                    out.println("<table border='1' style='background-color: grey'>");
                } else {
                    out.println("<table border='1'>");
                }
                for (int f = 0; f < filas; f++) {
                    out.println("<tr>");
                    for (int c = 0; c < columnas; c++) {
                        out.println("<td>");
                        out.println("<input type='number' style='width: 40px' name='celda"+(f+1)+"-"+(c+1)+"'>");
                        out.println("</td>");
                    }
                    out.println("</tr>");
                }
                out.println("</table><br>");
                out.println("<input type='submit' value='Guardar matriz'>");
                out.println("<input type='reset' value='Restablecer'>");
                out.println("</form>");
                out.println("</body>");
                out.println("</html>");
            }
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
