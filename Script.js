
var texto = document.getElementById("ingresar");
var b1 = document.querySelector("button");
var b2 = document.querySelector("button2");
var b3 = document.querySelector("button3");
var textofinal =document.getElementById("rectangulo");
var ejecutar = false
const regexp = ["á","é","í","ó","ú"];

 function ocultarAparecer(){
     
     document.getElementById("munhecotext").style.visibility = "hidden";
     b3.style.visibility = "visible";
     document.getElementById("munheco").style.visibility = "hidden";
 } 
 function textoError(){
     textofinal.innerHTML="intente de nuevo , ingrese solo minusculas sin acentos";
     ocultarAparecer();
 }
function validar(){
    if(texto.value !=""){
        if(texto.value === texto.value.toLowerCase()){
            for(var i = 0 ; i < regexp.length; i++){
                if(texto.value.search(regexp[i]) == -1 ){
                    ejecutar = true ;
                }else {ejecutar = false;
                    textoError(); 
                    break;
                }
            }

        }else textoError();
            
        
    }
    return ejecutar;
}
function encriptar(){

    validar();

    if(ejecutar){

        var t2 = texto.value.replace(/e/g,"enter");
        var t3 = t2.replace(/i/g,"imes");
        var t4 = t3.replace(/a/g,"ai");
        var t5 = t4.replace(/o/g,"ober");
        var t6 = t5.replace(/u/g,"ufat");
        
        textofinal.innerHTML =  t6 ;
        ocultarAparecer();
    }

}

 function desencriptar(){

    validar();

    if(ejecutar){    
        var t2 = texto.value.replace(/enter/g,"e");
        var t3 = t2.replace(/imes/g,"i");
        var t4 = t3.replace(/ai/g,"a");
        var t5 = t4.replace(/ober/g,"o");
        var t6 = t5.replace(/ufat/g,"u");
        textofinal.innerHTML = t6 ;
        ocultarAparecer();
    }
}
   
 
function copiarTodo(){
 var textCopy = document.getElementById("rectangulo")
  textCopy.select();
  document.execCommand("copy");
  alert("Texto copiado");
  return;
 }

b3.style.visibility = "hidden";
b1.onclick = encriptar;
b2.onclick = desencriptar;
b3.onclick = copiarTodo;

