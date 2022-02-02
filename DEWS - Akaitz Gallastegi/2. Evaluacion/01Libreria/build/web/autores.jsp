<%-- 
    Document   : autores
    Created on : 2 feb. 2022, 10:42:16
    Author     : dw2
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <c:if test="${autores == null}">
            <jsp:forward page="ServletControlador"/>
        </c:if>
        <h1>Lista de Autores</h1>
        <table border="0">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha de nacimiento</th>
                    <th>Nacionalidad</th>
                    <th>Ver libros</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${autores}" var="autor">
                    <tr>
                        <td>${autor.nombre}</td>
                        <td><fmt:formatDate value="${autor.fechanac}" pattern="yyyy/MM/dd"/></td>
                        <td>${autor.nacionalidad}</td>
                        <td><a href="ServletControlador?id=${autor.idAutor}&autor=${autor.nombre}">Ver Libros</a></td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
        <h1>Añadir Autor</h1>
        <form name="enviar" action="ServletControlador" method="POST">
            <table>
                <tr>
                    <td>Nombre:</td>
                    <td><input type="text" name="nombre"></td>
                </tr>
                <tr>
                    <td>Fecha de nacimiento:</td>
                    <td><input type="date" name="fechanac"></td>
                </tr>
                <tr>
                    <td>Nacionalidad:</td>
                    <td><input type="text" name="nacionalidad"></td>
                </tr>
            </table>
            <input type="submit" name="enviar" value="Añadir">
        </form>
        <c:if test="${existe!=null}">
            El autor ${autor} ya existe
        </c:if>   
        <c:if test="${libros != null}">
            <h1>Libros de ${autor}</h1>
            <ul>
            <c:forEach items="${libros}" var="libro">
                <li>${libro.titulo}</li>
            </c:forEach>
            </ul>
        </c:if>
    </body>
</html>
