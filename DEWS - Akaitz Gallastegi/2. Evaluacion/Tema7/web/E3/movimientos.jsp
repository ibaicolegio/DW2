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
                        <td><c:if test='${sessionScope.titular!=null}'>${titular}</c:if></td>
                    </tr>
                    <tr>
                        <td>Saldo inicial</td>
                        <td><c:if test='${sessionScope.saldo!=null}'>${saldo}</c:if></td>
                    </tr>
                    <tr>
                        <td>Cantidad</td>
                        <td><input type="number" name="cantidad"></td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <table style="width: 100%">
                                <tbody>
                                    <tr>
                                        <td><input style="width: 100%" type="submit" name="ingresar" value="INGRESAR"></td>
                                        <td><input style="width: 100%" type="submit" name="gastar" value="GASTAR"></td>
                                    </tr>
                                </tbody>
                            </table> 
                        <td>
                    </tr>
                </tbody>
            </form>
        </table>

    </body>
</html>
