<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="shortcut icon" href="Imagenes/LogoPeque.ico"/>
        <link rel="stylesheet" type="text/css" href="CSS/Index.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script type="text/javascript" src="JavaScript/Validacion.js"></script>
        <script type="text/javascript" src="JavaScript/Correo.js"></script>
        <title>INDEX PERSONA</title>
    </head>
    <body background="Imagenes/Rojo.jpg">

        <br>
    <center><img src="Imagenes/adulto.jpg"/></center>
    <div id="wrapper">

        <form name="login-form" id="login-form" class="login-form" action="SIniciarSesion" method="post" autocomplete="off">

            <div class="header">
                <h1>Inicio de sesion</h1>
                <span>Ingrese su nombre y su numero</span>
            </div>

            <div class="content">
                <input type="text" name="correo" required  class="input username" placeholder="Nombre completo"/>
                <div class="user-icon"></div>
                <input type="text" name="contrasena" required  class="input password" placeholder="Numero" />
                <div class="pass-icon"></div>		
            </div>

            <div class="footer">
                <input type="submit" name="submit" value="Ingresar" class="button"/>
                <input type="submit" name="submit" value="Registrar" class="register" OnClick="location.href = 'registroAdulto.jsp'"/>
            </div>
        </form>
        <form action="index.jsp" name="login-form" id="login-form" class="login-form">
            <div class="footer">
                <center>
                    <input type="submit" name="submit" value="Regresar al inicio" class="button" />
                </center>
            </div>
        </form>
    </div>
    <div class="gradient"></div>
</body>
</html>