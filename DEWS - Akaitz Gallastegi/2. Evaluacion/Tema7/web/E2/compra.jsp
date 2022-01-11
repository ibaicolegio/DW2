<%-- 
    Document   : compra
    Created on : 11 ene. 2022, 10:46:45
    Author     : dw2
--%>

<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <table>
            <form name="formulario" action="compra.jsp" method="POST">
                <tr>
                    <th>PRODUCTO</th>
                    <th>PEDIR</th>
                </tr>
                <c:forEach items="${productos}" var="producto" varStatus="index">
                    <tr>
                        <td>${producto}</td>
                        <td><input type="submit" name="${index.getCount()}" value="Adquirir unidad"></td>
                        <%
                            ArrayList compras=new ArrayList();
                            session.setAttribute("compras", compras);
                            
                            
                        %>
                    </tr>
                </c:forEach>
            </form>
        </table>
    </body>
</html>
