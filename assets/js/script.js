// Operaciones aritméticas.
// - Bucle if.  IF
// - Bucle for.
// - Arreglos.
// - Métodos de matrices.
// - Funciones. -           Listo
// - Funciones de flecha.
// - Variables. -           Listo
// - Declaración de variables de ES6.  Listo
// - Objetos                 CASI
//------------------------------------------------

// - Variables.

// captura presupuesto
let ingresopresupuesto = document.getElementById("presupuesto");
let nombregasto = document.getElementById("nombregasto");
let montogasto = document.getElementById("montogasto");

//objeto

// function Valoresglobales(presupuesto, gastos, saldo) {
//   this.presupuesto = presupuesto;
//   this.gastos = gastos;
//   this.saldo = saldo;
// }

// - Funciones
function ingresoPresupuesto() {
  let presTabla = document.getElementById("presupuesto_tabla");
    presTabla.innerHTML = ingresopresupuesto.value;
};

function Gasto(nombre, valor) {
  this.nombre = nombre;
  this.valor = valor;
}

gastos = [];



 let linea = ""
function ingresoGasto() {
  let tbody = document.getElementById("tbody");

  let nomGasto = nombregasto.value;
  let monGasto = montogasto.value;
  
  linea = linea + "<tr>"
  linea = linea + "<td>" + nomGasto + "</td><td>" + monGasto + "</td><td> borrar </td";
linea = linea + "</tr>"
  tbody.innerHTML = linea;

  const nuevoGasto = new Gasto(nomGasto, monGasto);
  gastos.push(nuevoGasto);
  console.log(gastos)


}

//creacion de un array con objetos en el interior que se puedan borrar.





let pedro = new Gasto("Aceite", "2500");
console.log(pedro)