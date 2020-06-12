var getData = function(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    if (name == "") {
        //dar el foco
        document.getElementById("name").focus();
    } else {
        if (age == "") {
            document.getElementById("age").focus();
        }else{
            if(!isNaN(age)){//verificar si es numero
                //console.log(name+" "+age);
                //limpiar campos
                var user = new Users(name,age,"php/insert.php");//creando usuario
                user.AddUser();
                document.getElementById("name").value = "";
                document.getElementById("age").value = "";
                document.getElementById("name").focus();
                searchUser();
            }
            
        }
    }
}

var searchUser = function(){
    var textSearch = $("input#search").val();
    var user = new Users(textSearch,"","php/consult.php");
    user.searchUser();
}