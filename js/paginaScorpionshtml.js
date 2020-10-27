function cerrarLogin(){
    var login=document.getElementById("divLogin");
    login.hidden=true;
    var btnAbrir=document.getElementById("btnAbrir");
    btnAbrir.hidden=false;
}
function myFunction() {
    document.getElementById("panel").style.display = "block";
    document.getElementById("panel2").style.display = "";
    document.getElementById("panel3").style.display = "";
  }
  function myFunction2() {
    document.getElementById("panel2").style.display = "block";
    document.getElementById("panel").style.display = "";
    document.getElementById("panel3").style.display = "";
  }
  function myFunction3() {
    document.getElementById("panel3").style.display = "block";
    document.getElementById("panel").style.display = "";
    document.getElementById("panel2").style.display = "";
  }
  
  /*setTimeout(pasen10segundos,10000);
  function pasen10segundos(){
      alert("HOLA AMIGO");
  }*/


   setInterval(cambiarImage,5000);
   var foto=1;

   function cambiarImage() {
       if(foto==1){            /*foto ++;  arranar foto=0 y poner en el ultimo foto0*/
       document.getElementById("1").hidden=true;
       document.getElementById("2").hidden=false;
       foto=2;
   }else if (foto==2){
       document.getElementById("2").hidden=true;
       document.getElementById("3").hidden=false;
       foto=3;
   }else if (foto==3){
       document.getElementById("3").hidden=true;
       document.getElementById("4").hidden=false;
       foto=4;
   }
  else if (foto==4){
    document.getElementById("4").hidden=true;
    document.getElementById("5").hidden=false;
    foto=5;
}
else if (foto==5){
  document.getElementById("5").hidden=true;
  document.getElementById("6").hidden=false;
  foto=6;
}
else if (foto==6){
  document.getElementById("6").hidden=true;
  document.getElementById("1").hidden=false;
  foto=1;
}

}
