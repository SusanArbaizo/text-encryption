const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnencriptar(){
    const textoEncriptado=encriptar(textArea.value)
    mensaje.value =textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage="none";
}
function encriptar(stringEncriptada){
    let matrizCodigo = [ [ "e", "enter"],["i","imes"],["a","ai"] ,["o","ober"],["u","ufat"] ]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
function btndesencriptar(){
    const textoEncriptado=desencriptar(textArea.value)
    mensaje.value =textoEncriptado
    textArea.value="";
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [ [ "e", "enter"],["i","imes"],["a","ai"] ,["o","ober"],["u","ufat"] ]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}
function btncopiar() {
    var elemento = document.getElementById("message");
    var texto = elemento.value;
    var aux = document.createElement("textarea");
    aux.value = texto;
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
   alert("mensaje copiado")
    // Limpiar el contenido del textarea
    elemento.value = "";
  }
  
  
  