/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package E2;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.Scanner;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author dw2
 */
@WebServlet(name = "ServletFormOpinion", urlPatterns = {"/ServletFormOpinion"})
public class ServletFormOpinion extends HttpServlet {

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
        String error="", link="";
        if(request.getParameter("enviar")!=null){
            if(request.getParameter("nombre").equalsIgnoreCase("")){
                error+="Nombre no agregado<br>";
            }
            if(request.getParameter("apellidos").equalsIgnoreCase("")){
                error+="Apellidos no agregados<br>";
            }
            if(request.getParameter("opinion")==null){
                error+="Opinion no agregada<br>";
            }
            if(request.getParameter("comentario").equalsIgnoreCase("")){
                error+="Comentario no agregado<br>";
            }
            if(request.getParameter("secciones")==null){
                error+="Secciones no agregadas<br>";
            }
            if(error.equals("") && request.getParameter("opinion").equalsIgnoreCase("B")){
                try {
                    link+="E2/seccionesfavoritas.txt";
                    BufferedWriter bw = new BufferedWriter(new FileWriter(getServletContext().getRealPath("E2/seccionesfavoritas.txt"),true));
                    String nombre=request.getParameter("nombre");
                    String[] secciones=request.getParameterValues("secciones");
                    bw.write(nombre+":");
                    for (String seccione : secciones) {
                        bw.write(seccione+",");
                    }
                    
                    bw.newLine();
                    bw.close();
                } catch (IOException ioe){
                    ioe.printStackTrace();
                }
            }
        }
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet ServletFormOpinion</title>");            
            out.println("</head>");
            out.println("<body>");
                out.println("<p style='color: red'>"+error+"</p>");
                out.println("<a href='"+link+"'>"+link+"</a>");
                out.println("<form action='' method='POST'>");
                    out.println("Nombre: <input type='text' name='nombre'><br><br>");
                    out.println("Apellidos: <input type='text' name='apellidos'><br><br>");
                    out.println("Opinion que le ha merecido este sitio web:<br>");
                    out.println("<input type='radio' name='opinion' value='B'> Buena<br>");
                    out.println("<input type='radio' name='opinion' value='R'> Regular<br>");
                    out.println("<input type='radio' name='opinion' value='M'> Mala<br><br>");
                    out.println("Comentarios<br>");
                    out.println("<textarea name='comentario'></textarea><br><br>");
                    out.println("Tus secciones favoritas<br>");
                    try{
                        File myObj = new File(getServletContext().getRealPath("E2/secciones.txt"));
                        Scanner myReader = new Scanner(myObj);
                        while (myReader.hasNextLine()) {
                            String data = myReader.nextLine();
                            out.println("<input type='checkbox' name='secciones' value='"+data+"'>"+data+"<br>");
                          }
                        myReader.close();
                    }   catch (FileNotFoundException e) {
                        System.out.println("An error occurred.");
                        e.printStackTrace();
                    }
                    out.println("<br><input type='submit' name='enviar' value='Enviar opinion'>");
                out.println("</form>");
            out.println("</body>");
            out.println("</html>");
        }
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }
    

}
