<%-- 
    Document   : nuevacuenta
    Created on : 12 ene. 2022, 11:35:41
    Author     : dw2
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <table style="background-color: darkgrey;">
            <form action="<%=this.getServletContext().getContextPath()%>/ServletNuevaCuenta" method="POST">
                <tbody>
                    <tr>
                        <td colspan=2 style="text-align: center;"><h2>NUEVA CUENTA</h1></td>
                    </tr>
                    <tr>
                        <td>Titular</td>
                        <td><input type="text" name="titular"></td>
                    </tr>
                    <tr>
                        <td>Saldo inicial</td>
                        <td><input type="number" name="saldo"></td>
                    </tr>
                    <tr>
                        <td colspan=2><input style="width: 100%" type="submit" name="enviar"></td>
                    </tr>
                </tbody>
            </form>
        </table>

    </body>
</html>
