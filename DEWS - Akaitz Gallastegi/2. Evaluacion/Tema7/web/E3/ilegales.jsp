<%-- 
    Document   : ilegales
    Created on : 18 ene. 2022, 11:00:14
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
        <h1>Ilegales</h1>
        <form action="${pageContext.request.contextPath}/ServletIlegales">
            <input type='text' name='nombre'>
            <input type='submit' name='add' value='enviar'>
        </form>
        <ul>
            <c:forEach items="${usuarios}" var="nombre" varStatus="index">
                <li>${nombre} <a href='${pageContext.request.contextPath}/ServletIlegales?eliminar=${index.index}'>X</a></li>
            </c:forEach>
        </ul>
    </body>
</html>
