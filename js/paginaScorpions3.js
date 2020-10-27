function abrirlogin(){
    var login = document.getElementById("loginPer");
    login.hidden=false;
    var btnAbrir = document.getElementById("Abrir");
    btnAbrir.hidden=true;
    var title = document.getElementById("lista");
    title.innerHTML="";
    
  }
  
  function cerrarlogin(){
    var login = document.getElementById("loginPer");
    login.hidden=true;
    var btnAbrir = document.getElementById("Abrir");
    btnAbrir.hidden=false;
  }
  var mayores=0;
  var acumEdad=0;
  var menores=0;
  
  function validarForm(){
   var nombreLog= document.getElementById("Nombre");
   var apellidoLog= document.getElementById("Apellido");
   var telefonoLog= document.getElementById("Telefono");
   var edadLog= document.getElementById("Edad");
   
     if (nombreLog.value==""){
        nombreLog.className="conerror";
      } else if (apellidoLog.value==""){
        apellidoLog.className="conerror";
      } else if (telefonoLog.value==""){
        telefonoLog.classList="conerror";
      } else if (edadLog.value==""){
        edadLog.classList="conerror";
      } else if (edadLog.value<0||edadLog.value>120){
        alert ("Edad permitada desde 0 hasta 120 años");
      }
      else {
        var edad="";
        if (edadLog.value>=18){
          mayores++;
         
        }else{
          menores++;
          acumEdad=acumEdad+parseInt(edadLog.value);
        }  
        
        var tbody=document.getElementById("tbody");
        tbody.innerHTML=tbody.innerHTML+"<tr><td>"+nombreLog.value+"</td>"+"<td>"+apellidoLog.value+"</td>"+"<td>"+telefonoLog.value+"</td>"+"<td>"+edadLog.value+"</td></tr>";
        
        }
  
        var parraMayor=document.getElementById("parraMayores");
        parraMayor.innerHTML="Su numero de Contacto es: "+mayores;
        
  }
  