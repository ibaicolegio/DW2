<%-- 
    Document   : visor_imagenes
    Created on : 10 ene. 2022, 11:36:02
    Author     : dw2
--%>

<%@page import="e1.beans.Imagen"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.io.File"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<% 
    final String RUTA="E1/imagenes";
    
    File carpeta = new File(this.getServletContext().getRealPath(RUTA));

    ArrayList<Imagen> imagenesDeCarpeta=new ArrayList<Imagen>();
    
    File[] list = carpeta.listFiles();

    for(int i=0;i<list.length;i++)
    {
       String ruta = this.getServletContext().getContextPath()+"/"+RUTA+"/"+list[i].getName();
       String nombre = list[i].getName().split("\\.")[0];
       long tamanyo = list[i].length();
       Imagen imagen=new Imagen(ruta, nombre, tamanyo);
       imagenesDeCarpeta.add(imagen);
    }
%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <form action="./visor_imagenes.jsp" method="POST">
            <label for="imagenes">Imagen: </label>
            <select name="imagenes">
                <%
                    int num=0;
                    for (Imagen imagen : imagenesDeCarpeta) {  
                %>
                        <option value="<%=num%>"><%=imagen.getNombre()%></option>
                <%  
                        num++;
                    }
                %>
            </select>
            Tamaño:
            <input type="radio" name="tamanyo" id="300px" value="300px" checked/>
            <label for="300px">300 px</label>
            <input type="radio" name="tamanyo" id="400px" value="400px" />
            <label for="400px">400 px</label>
            <input type="radio" name="tamanyo" id="500px" value="500px" />
            <label for="500px">500 px</label>
            <input type="submit" name="enviar" value="VER IMAGEN">
        </form>
        <%
            if(request.getParameter("enviar")!=null){
                int posicion=Integer.parseInt(request.getParameter("imagenes"));
        %>
        <p>Tamaño <%=imagenesDeCarpeta.get(posicion).tamanioDesglosado()%></p>
        <img src="<%=imagenesDeCarpeta.get(posicion).getRuta()%>" width="<%=request.getParameter("tamanyo")%>"/>

        <%        
            }
        %>
    </body>
</html>
