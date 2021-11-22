package e1;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "E1", urlPatterns = {"/E1"})
public class E1 extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        float celsius=0;
        float fahrenheit=0;
        try{
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Resultado de la conversion</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Resultado de la conversion:</h1>");
            out.println("<br>");
            if(request.getParameter("fah-cel")!=null){
                fahrenheit=Float.parseFloat(request.getParameter("fahrenheit"));
                celsius= (fahrenheit - 32) * 5/9;
            } else if(request.getParameter("cel-fah")!=null) {
                celsius=Float.parseFloat(request.getParameter("celsious"));
                fahrenheit=(celsius * 9/5) + 32;
            } else {
                out.println("ERROR");
            }
            out.println("<p>Valor en celsius: "+celsius+"</p>");
            out.println("<p>Valor en fahrenheit: "+fahrenheit+"</p>");
            out.println("<a href='conversorCF.html'>Enlace para volver al formulario</a>");
            out.println("</body>");
            out.println("</html>");
        }finally{
            out.close();
        }
    }
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
        processRequest(request, response);
    }
    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException{
        processRequest(request, response);
    }
}
