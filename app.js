/* let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let cantidadDeIntentosMaximo = 3;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
      let numeroDeUsuario = parseInt(document.getElementById ("valorUsuario").value);

      if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ("p", `Acertaste el Número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById ("reiniciar").removeAttribute("disabled");
      } else {
        //El usuario no acertó.        
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ("p", "El número es menor");
        } else {
            asignarTextoElemento("p", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();       
      }
      return;
}

function limpiarCaja (){
  document.querySelector ("#valorUsuario").value = "";  
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
     asignarTextoElemento ("p", "Ya se sortearon todos los números Posibles");
     } else {
      // si el numero generado esta incluido en la lista
      if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
    
}

function condicionesIniciales (){
  asignarTextoElemento("h1" , "Juego del número secreto !");
  asignarTextoElemento("p" , `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego () {
  //Limpiar la caja
  limpiarCaja ();
  // Indicar mensaje de intervalo de números
  // Generar el número aleatorio
  //Iniciar el numero intentos
  condicionesIniciales();
  //Deshabiliar el botón de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled","true");
 
}
condicionesIniciales(); */


//ejecicio 1
let listagenerica = []; 

//2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//3 Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby' , 'GoLang');

//4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLista (){  
  console.log (lenguagesDeProgramacion);
}
mostrarLista();

//5 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso. 
function listAlReves (){
  console.log (lenguagesDeProgramacion.reverse());
}
listAlReves(); 

// ejecicio 6 Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio (){
let listDeNumeros = [];
let initialValue = 0;
let totalSuma = listDeNumeros.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
let promedio = totalSuma/ listDeNumeros.length;
console.log(promedio);
}
calcularPromedio();


//ejecicio 7 Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
let listaNumeros = [5,8,9,8,7,4,56];
function mostrarValorMayor (){  
  let numeroMayor = Math.max.apply(null, listaNumeros); 
  console.log (numeroMayor);   
  }
function mostrarValorMenor (){    
    let numeroMenor = Math.min.apply(null, listaNumeros);   
    console.log (numeroMenor);   
  }
mostrarValorMayor ();
mostrarValorMenor (); 


//ejecicio 8 Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaDeElementos (){
let listaDeElementos = [];
let valorInicial = 0;
let totalSuma = listaDeElementos.reduce((accumulator, currentValue) => accumulator + currentValue, valorInicial);
console.log(totalSuma);
}
sumaDeElementos();

//ejercicio 9 Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
let lista = [1,2,3,4];
let elementoBuscado = 5;
function posicionLista () {
  let posicion = lista.indexOf(elementoBuscado);
  console.log (posicion);
}
posicionLista ();

//ejercicio 10 Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
let listaUno = [1,2,3];
let listaDos = [1,2,3];
function sumaDeListas(){
  let sumaListaUno = listaUno.reduce((accumulator, currentValue) => accumulator + currentValue);
  let sumaListaDos = listaDos.reduce((accumulator, currentValue) => accumulator + currentValue);
  let sumaListas = sumaListaUno + sumaListaDos;
  console.log (sumaListas);
}
sumaDeListas();


//11 Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
let ultimaLista = [2,4,6,8];
function cuadradoLista() {
  console.log (Array.from (ultimaLista, (x) => x*x))
  };
cuadradoLista();
