let numeroAleatorio=0;
let cantidadIntentos=0;
let numeroMaximo= 10;
let listaNumerosSorteados=[];


function asignarTexto(etiqueta, texto){
    let elementoHTML= document.querySelector(etiqueta);
    elementoHTML.innerHTML=(texto);
    return;

    /**las dos variables se transforman en lo de arriba y cuando se llama a la funcion, se le pasa la etiqueta a la que se le quiere agregar el texto y después el texto es el siguiente parámetro, así queda para cualquier elemento HTML.
     * 
     * let titulo= document.querySelector(etiqueta);
        titulo.innerHTML=(texto);
        let parrafo= document.querySelector(etiqueta);
        parrafo.innerHTML= (texto);*/
};
/** 
function crearElemento(nvaEtiqueta, nvoTexto){
    let nvoElemento= document.createElement(nvaEtiqueta, nvoTexto);
    nvoElemento.innerText= (nvoTexto);
    document.body.append(nvoElemento);
}*/

function generarNumero(){
/** 
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTexto("p", "Juego terminado. Ya se sortearon todos los números");
        return null;
    }

    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo);
    } while (listaNumerosSorteados.includes(numeroGenerado)); // Repetir hasta encontrar un número único

    listaNumerosSorteados.push(numeroGenerado);
    console.log("Número generado:", numeroGenerado);
    console.log("Lista actualizada:", listaNumerosSorteados);
    return numeroGenerado;*/
 
    let numeroGenerado= parseInt(Math.floor(Math.random()*numeroMaximo));
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    // qué hacercuando ya se sortearon todos los números*/
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTexto("p", "Juego terminado. Ya se sortearon todos los números");
        return null;
        } else{   
            /**incluves barre el arreglo para ver si está */
            if (listaNumerosSorteados.includes(numeroGenerado)){  
                return generarNumero(); //recursividad, funcion se llama a si misma*/
            } else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            };
    };
};

function intentarUsuario() {
    let numeroUsuario= parseInt(document.getElementById("numeroIngresado").value);/**.value para tomar el valor dentro del input */ 

    if(cantidadIntentos>= 3){// se hace igual a 3 para que no choque con la iniciada del juego en 1
        asignarTexto("p", "Perdiste. Máximo de intentos alcanzado");
        document.querySelector("#reiniciar").removeAttribute("disabled"); 
        return;
    };

    if (numeroUsuario === numeroAleatorio){
        asignarTexto("p", `Acertaste en el intento ${cantidadIntentos}`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    } else{
        //no acierta
        switch(true){
            case numeroUsuario > numeroAleatorio:
                asignarTexto("p", "El número es menor");
            break;
            case  numeroUsuario < numeroAleatorio:
                asignarTexto("p", "El número es mayor");
                break;    
        }

        cantidadIntentos++;
        limpiarCampo(); //llamamos a limpar cuando el usuario no acierta
       /**  if(numeroUsuario > numeroAleatorio){
            asignarTexto("p", "El número es menor");
        } else{
            asignarTexto("p", "El número es mayor");
        }
        cantidadIntentos++;
       }*/
        if(cantidadIntentos > 3){
            asignarTexto("p", "Perdiste. Máximo de intentos alcanzado");
            document.querySelector("#reiniciar").removeAttribute("disabled"); // Habilitar botón de reinicio
            return;
        };
        console.log (cantidadIntentos);
    return;
        };
};

function generarCondicionesIniciales(){
    asignarTexto("h1", "Adivina el numero");
    asignarTexto("p", `Elije un número entre 0 y ${numeroMaximo}`);
    numeroAleatorio=generarNumero();
    cantidadIntentos=1;
};

function limpiarCampo(){
    document.querySelector("#numeroIngresado").value="";
    /*let valorCaja= document.querySelector("#numeroIngresado");//el numeral me busca por id
    valorCaja.value="";*/
};

function reiniciarJuego(){
    limpiarCampo();
    generarCondicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
};

/**Instancias */
generarCondicionesIniciales();