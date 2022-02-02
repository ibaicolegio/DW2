/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servlets;

import beans.Autor;
import beans.Libro;
import dao.GestorBD;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Locale;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Akaitz
 */
@WebServlet(name = "ServletControlador", urlPatterns = {"/ServletControlador"})
public class ServletControlador extends HttpServlet {
    private GestorBD bd;
    
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        bd = new GestorBD();
    }
    
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
        if(request.getSession().getAttribute("autores")==null){
            request.getSession().setAttribute("autores", bd.autores());
        }
        if(request.getParameter("id")!=null){
            request.getSession().setAttribute("libros", bd.libros(Integer.parseInt(request.getParameter("id"))));
            request.getSession().setAttribute("autor", request.getParameter("autor"));
        }
        request.getRequestDispatcher("autores.jsp").forward(request, response);
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
        //Para evitar problemas con caracteres especiales
        request.setCharacterEncoding("UTF-8");
        if(request.getParameter("enviar")!=null){
            ArrayList<Autor> autores=(ArrayList<Autor>) request.getSession().getAttribute("autores");
            Autor autor=new Autor();
            autor.setNombre(request.getParameter("nombre"));
            SimpleDateFormat formateador = new SimpleDateFormat("yyyy-MM-dd");
            try {
                autor.setFechanac(formateador.parse(request.getParameter("fechanac")));
            } catch (ParseException ex) {
                Logger.getLogger(ServletControlador.class.getName()).log(Level.SEVERE, null, ex);
            }
            autor.setNacionalidad(request.getParameter("nacionalidad"));
            if(!autores.contains(autor)){
                bd.insertarAutor(autor);
                request.getSession().setAttribute("autores", bd.autores());
                request.getRequestDispatcher("autores.jsp").forward(request, response);
            } else {
                response.sendRedirect("autores.jsp?existe");  
            }
        }
    }

}
