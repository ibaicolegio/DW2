package e0.servlets;

import e0.beans.Catalogo;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class E0 extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            HttpSession session = request.getSession(true);
            String libroSeleccionado="";
            if(request.getParameter("libro")!=null && request.getParameter("agregar")!=null){
                if(session.getAttribute("libros")!=null){
                    ArrayList<String> libros=(ArrayList<String>) session.getAttribute("libros");
                    String libro=request.getParameter("libro");
                    libroSeleccionado=libro;
                    if(!libros.contains(libro)){
                         libros.add(libro);
                    } else {
                        out.println("<a style='color:red'>Ya has elegido "+libro+"</a>");
                    }
                    session.setAttribute("libros", libros);
                } else {
                    ArrayList<String> libros=new ArrayList<>();
                    String libro=request.getParameter("libro");
                    libros.add(libro);
                    session.setAttribute("libros",libros);
                }
            }
            if(request.getParameter("borrar")!=null){
                session.invalidate();
                session = request.getSession(true);
            }
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet e0</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<form action='' method='POST'>");
            out.println("<select name='libro'>");
            String[] nomLibros=Catalogo.getNombres();
            for (String nomLibro : nomLibros) {
                if(libroSeleccionado.equalsIgnoreCase(nomLibro)){
                    out.println("<option value='"+nomLibro+"' selected>"+nomLibro+"</option>");
                } else {
                    out.println("<option value='"+nomLibro+"'>"+nomLibro+"</option>");
                }
            }
            out.println("</select>");
            out.println("<input type='submit' name='agregar' value='Agregar'>");
            out.println("<input type='submit' name='borrar' value='Borrar sesion'>");
            out.println("</form>");
            if(session.getAttribute("libros") == null){
                out.println("<h2>No se han elegido libros</h2>");
            } else {
                out.println("<h2>TU ELECCION:</h2>");
                out.println("<ul>");
                ArrayList<String> libros=(ArrayList<String>) session.getAttribute("libros");
                Iterator it=libros.iterator();
                while (it.hasNext()) {
                    out.println("<li>"+it.next()+"</li>");
                }
                out.println("<ul>");
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
