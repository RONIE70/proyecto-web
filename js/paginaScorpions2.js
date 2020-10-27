function validar (){
    var nombre= document.getElementById("txtnombre").value;
    var apellido= document.getElementById("txtapellido").value;
    var telefono= document.getElementById("txttelefono").value;
    var mail =  document.getElementById("txtcorreo").value; 
    var contraseña = document.getElementById("txtcontraseña").value; 
    var contraseñabis = document.getElementById("txtcontraseñabis").value; 
    
    
    if(nombre==""){
    alert ("FALTA COMPLETAR EL CAMPO NOMBRE");
    }else if (apellido==""){
    alert("FALTA COMPLETAR EL CAMPO APELLIDO");
    }else if (telefono==""){
    alert("FALTA COMPLETAR EL CAMPO TELEFONO");
    }else if (mail==""){
    alert("FALTA COMPLETAR EL CAMPO MAIL");
    }else if (contraseña==""){
    alert("FALTA COMPLETAR EL CAMPO CONTRASEÑA");
    } else if (contraseñabis=="" ){
    alert("FALTA COMPLETAR LA CONFIRMACION DE CONTRASEÑA");
    }else if (contraseña!=contraseñabis){
    alert("LAS CONTRASEÑAS NO COINCIDEN");
    }else if(contraseña==contraseñabis){
        alert("GRACIAS POR REGISTRARSE");
    }
  
}
