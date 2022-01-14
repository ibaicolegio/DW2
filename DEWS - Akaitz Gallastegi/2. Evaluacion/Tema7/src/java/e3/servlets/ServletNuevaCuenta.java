
package e3.servlets;

import e3.beans.Cuenta;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class ServletNuevaCuenta extends HttpServlet {

    @Override
    public void init() throws ServletException {
        super.init(); //To change body of generated methods, choose Tools | Templates.
        ServletContext context=getServletContext();
        ArrayList<String> nombres=new ArrayList<>();
        nombres.add("admin");
        nombres.add("ibai");
        context.setAttribute("usuarios", nombres);
    }

    
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        HttpSession session=request.getSession(true);
        String fichero="errores.txt", error="";
        ArrayList<String> errores=new ArrayList<>();
        ArrayList<String> nombres=(ArrayList<String>)request.getServletContext().getAttribute("usuarios");
        Cuenta cuenta;
        if(session.getAttribute("cuenta")==null){
            cuenta=new Cuenta();
        } else {
            cuenta=(Cuenta)session.getAttribute("cuenta");
        }
        try {
            String ruta=this.getServletContext().getRealPath("E3/txt/"+fichero);
            File myObj = new File(ruta);
            Scanner myReader = new Scanner(myObj,"UTF-8");
            while (myReader.hasNextLine()) {
                errores.add(myReader.nextLine());
            }
            myReader.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        session.setAttribute("titular", request.getParameter("titular"));
        if(!request.getParameter("enviar").isEmpty()){
            if(request.getParameter("titular").equals("")){
                error+=errores.get(0)+"<br>";
            } else if(nombres.contains(request.getParameter("titular"))){
                error+=errores.get(2)+"<br>";
            }
            System.out.println(request.getParameter("saldo"));
            if(request.getParameter("saldo").equals("")){
                cuenta.setSaldo(0);
            }else if(Integer.parseInt(request.getParameter("saldo"))<0){
                error+=errores.get(1)+"<br>";
            } else {
                cuenta.setSaldo(Integer.parseInt(request.getParameter("saldo")));
            }
            session.setAttribute("error", error);
            session.setAttribute("cuenta", cuenta);
            if(error!=""){
                response.sendRedirect(request.getContextPath() + "/E3/nuevacuenta.jsp");
            } else {
                response.sendRedirect(request.getContextPath() + "/E3/movimientos.jsp");
            }
        }else if(!request.getParameter("gastar").isEmpty()){
            if(request.getParameter("cantidad").equals("")){
                cuenta.setSaldo(0);
            }else if(Integer.parseInt(request.getParameter("cantidad"))<0){
                error+=errores.get(1)+"<br>";
            } else {
                cuenta.gastar(Integer.parseInt(request.getParameter("cantidad")));
            }
            response.sendRedirect(request.getContextPath() + "/E3/movimientos.jsp");
        }else if(!request.getParameter("ingresar").isEmpty()){
            if(request.getParameter("cantidad").equals("")){
                cuenta.setSaldo(0);
            }else if(Integer.parseInt(request.getParameter("cantidad"))<0){
                error+=errores.get(1)+"<br>";
            } else {
                cuenta.ingresar(Integer.parseInt(request.getParameter("cantidad")));
            }
            response.sendRedirect(request.getContextPath() + "/E3/movimientos.jsp");
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
