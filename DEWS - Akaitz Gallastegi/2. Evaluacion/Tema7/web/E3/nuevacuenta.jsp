<%-- 
    Document   : nuevacuenta
    Created on : 12 ene. 2022, 11:35:41
    Author     : dw2
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <c:if test='${!sessionScope.error.equals("")}'><p style="color: red">${error}</p></c:if>
        <table style="background-color: darkgrey;">
            <form action="<%=this.getServletContext().getContextPath()%>/ServletNuevaCuenta"method="POST">
                <tbody>
                    <tr>
                        <td colspan=2 style="text-align: center;"><h2>NUEVA CUENTA</h1></td>
                    </tr>
                    <tr>
                        <td>Titular</td>
                        <td><input type="text" name="titular" value="<c:if test='${sessionScope.cuenta.titular!=null}'>${sessionScope.cuenta.titular}</c:if>"></td>
                    </tr>
                    <tr>
                        <td>Saldo inicial</td>
                        <td><input type="number" name="saldo" value="<c:if test='${sessionScope.cuenta.saldo!=0}'>${sessionScope.cuenta.saldo}</c:if>"></td>
                    </tr>
                    <tr>
                        <td colspan=2><input style="width: 100%" type="submit" name="enviar" value="Crear Cuenta Corriente"></td>
                    </tr>
                </tbody>
            </form>
        </table>
        <a href="${pageContext.request.contextPath}/ServletIlegales">Ilegales</a>
    </body>
</html>
