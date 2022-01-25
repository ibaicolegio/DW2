<%-- 
    Document   : devoluciones
    Created on : 25 ene. 2022, 10:12:48
    Author     : dw2
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <h1>Hola</h1>
        <table>
            <c:forEach var="libroPrestamo" items="${librosPrestamo}">
            <tr>
                <td>
            
                    ${libroPrestamo.titulo},
                    ${libroPrestamo.fecha} dias prestado
                </td>
                <td><a href="">MARCAR DEVOLUCION</a></td>
            </tr>
         </c:forEach>
        </table>
    </body>
</html>
