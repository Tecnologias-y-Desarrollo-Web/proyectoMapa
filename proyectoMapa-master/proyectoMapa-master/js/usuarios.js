function Usario(usuario, contrasena, nombre, apellido, latitud, longitud, action){
    this.usuario = usuario;
    this.contrasena = contrasena;
    this.nombre = nombre;
    this.apellido = apellido;
    this.latitud = latitud;
    this.longitud = longitud;
    this.action = action;
}
var datos = [];
Usario.prototype.ValidarUsuario = function(){
    var nombre = document.getElementById("usuario").value;
    var con = document.getElementById("contra").value;
    $.post(this.action,{buscarUsuario:this.usuario},function(response){
            if(response==""){
                alert("Usuario Incorrecto. Si no tiene cuenta REGISTRESE");
                document.getElementById("usuario").value = "";
                document.getElementById("contra").value = "";
                document.getElementById("usuario").focus();
            }else{
                datos = response.split('*');
                var contra = datos[1];
                if(contra == con){
                    alert("Bienvenido: " + nombre);
                    window.open('Reserva.html');
                }else{
                    alert("Existe el usuario pero la contraseña es incorrecta");
                    document.getElementById("contra").value = "";
                    document.getElementById("contra").focus();
                }
            }
    });
}

Usario.prototype.Insertar = function(){
    $.post(this.action,{usu:this.usuario,con:this.contrasena,nom:this.nombre,ape:this.apellido,lat:this.latitud,lon:this.longitud},function(response){
        if(response == 1){
            alert("Datos Insertados");
            window.open('Inicio.html', '_self');
        }
    });
}

Usario.prototype.Llenar = function(){
    $.post(this.action,{buscarUsuario:this.usuario},function(response){
        datos = response.split('*');
        document.getElementById("nom").value = datos[2];
        document.getElementById("ape").value = datos[3];
        document.getElementById("lati").value = datos[4];
        document.getElementById("longi").value = datos[5];
    });
}