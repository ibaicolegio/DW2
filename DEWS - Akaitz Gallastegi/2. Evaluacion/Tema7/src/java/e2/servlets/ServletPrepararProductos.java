package e2.servlets;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class ServletPrepararProductos extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session= request.getSession(true);
        String fichero=this.getInitParameter("fichero");
        if(session.getAttribute("productos")==null){
            try {
                String ruta=this.getServletContext().getRealPath("E2/txt/"+fichero);
                File myObj = new File(ruta);
                Scanner myReader = new Scanner(myObj,"UTF-8");
                ArrayList<String> productos=new ArrayList<>();
                if(request.getParameter("categ")!=null){
                    while (myReader.hasNextLine()) {
                        String[] data = myReader.nextLine().split(";");
                        if(request.getParameter("categ").equals(data[0])){
                            productos.add(data[1]);
                        }
                    }
                } else {
                    while (myReader.hasNextLine()) {
                        String[] data = myReader.nextLine().split(";");
                        productos.add(data[1]);
                    }
                }
                myReader.close();
                session.setAttribute("productos",productos);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
        }
        response.sendRedirect(request.getContextPath() + "/E2/compra.jsp");
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
