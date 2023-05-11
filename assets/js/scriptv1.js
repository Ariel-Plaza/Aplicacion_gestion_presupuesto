// Operaciones aritméticas.
// - Bucle if.  IF
// - Bucle for.
// - Arreglos.               LISTO
// - Métodos de matrices.    LISTO
// - Funciones. -           Listo
// - Funciones de flecha.
// - Variables. -           Listo
// - Declaración de variables de ES6.  Listo
// - Objetos                 LISTO
//------------------------------------------------

// - Variables.

// captura presupuesto
let ingresopresupuesto = document.getElementById("presupuesto");
let nombregasto = document.getElementById("nombregasto");
let montogasto = document.getElementById("montogasto");
let gastos = [];
let linea = "";

// - Funciones
function ingresoPresupuesto() {
  let presTabla = document.getElementById("presupuesto_tabla");
  presTabla.innerHTML = ingresopresupuesto.value;
}

function ingresoGasto() {
  let tbody = document.getElementById("tbody");

  let nomGasto = nombregasto.value;
  let monGasto = montogasto.value;

  linea = linea + "<tr>";
  linea =
    linea +
    "<td>" +
    nomGasto +
    "</td><td>" +
    monGasto +
    "</td><td> borrar </td";
  linea = linea + "</tr>";
  tbody.innerHTML = linea;

  const nuevoGasto = new Gasto(nomGasto, monGasto);
  gastos.push(nuevoGasto);
  console.log(gastos);
}

// Objeto
function Gasto(nombre, valor) {
  this.nombre = nombre;
  this.valor = valor;
}

//for al borrar debe volver a mostrar los datos

// orientado a objeto
