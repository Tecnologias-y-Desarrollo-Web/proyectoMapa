function Users(name, age, action){//crear una clase 
    this.action = action;
    this.name = name;
    this.age = age;
}

Users.prototype.AddUser = function(){//anadir un metodo a la clase
    //ajax permite enviar ddatos a un servidor
    console.log(this.name+" "+this.age);
    $.ajax({
        type:"POST",//forma de enviar los datos
        url:this.action,//direccion a donde van los datos
        data:{name:this.name, age:this.age},//datos que se van a enviar
        success: function(response){//respuesta del srvidor
            if(response == 1){
                alert("Datos insertados");
            }
        }
    });
}

Users.prototype.searchUser = function(){
    $.post(this.action,{nameSearch:this.name},function(response){
        $("#resultSearch").html(response);
    });
}