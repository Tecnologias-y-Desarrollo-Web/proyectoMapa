var usuario;
var Validar = function(){
    usuario = document.getElementById("usuario").value;
    var usu = new Usario(usuario,"","","","","","php/verificar.php");
    usu.ValidarUsuario();
}

var InsertarUsuario = function(){
    var usuario = document.getElementById("usu").value;
    var contra = document.getElementById("contra").value;
    var nom = document.getElementById("nombre").value;
    var ape = document.getElementById("apellido").value;
    var lat = document.getElementById("lati").value;
    var lon = document.getElementById("longi").value;
    var usu = new Usario(usuario,contra,nom,ape,lat,lon,"php/insertar.php");
    //usu.Comprobar();
    usu.Insertar();
}

var Cargar = function(){
    var u = window.opener.document.getElementById("usuario").value;
    var usu = new Usario(u,"","","","","","php/verificar.php");
    usu.Llenar();
}