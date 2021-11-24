package e1;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Enumeration;
import java.util.HashSet;
import java.util.Iterator;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "convertirtemperatura", urlPatterns = {"/conversion"})
public class ServletConversor extends HttpServlet {

    HashSet<String> locale=new HashSet<String>();
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        float celsius=0;
        float fahrenheit=0;
        locale.add(request.getLocale().toString());
        try{
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Resultado de la conversion</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Resultado de la conversion:</h1>");
            if(request.getParameter("fah-cel")!=null){
                if(!request.getParameter("fahrenheit").equals("")){
                    ConversionCF conversion=new ConversionCF('f', Float.parseFloat(request.getParameter("fahrenheit")));
                    out.println("<p>Valor en celsius: "+conversion.getCelsius()+"</p>");
                    out.println("<p>Valor en fahrenheit: "+conversion.getFahrenheit()+"</p>");
                } else {
                    out.println("ERROR: Debes indicar los grados Fahrenheit<br>");
                }
                
            } else if(request.getParameter("cel-fah")!=null) {
                if(!request.getParameter("celsious").equals("")){
                    ConversionCF conversion=new ConversionCF('c', Float.parseFloat(request.getParameter("celsious")));
                    out.println("<p>Valor en celsius: "+conversion.getCelsius()+"</p>");
                    out.println("<p>Valor en fahrenheit: "+conversion.getFahrenheit()+"</p>");
                } else {
                    out.println("ERROR: Debes indicar los grados Celsius<br>");
                }
            }
            out.println("<a href='E1/conversorCF.html'>Enlace para volver al formulario</a><br>");
            out.println("<p>Se han establecido conexiones desde "+locale.size()+" distintos locale’s</p>");
            out.println("<p>Idiomas:</p>");
            out.println("<ul>");
            Iterator value=locale.iterator();
            while(value.hasNext()){
                out.println("<li>"+value.next()+"</li>");
            }
            out.println("</ul>");
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
