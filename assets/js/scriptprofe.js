// Operaciones aritméticas.
// - Bucle if.  IF
// - Bucle for.
// - Arreglos.
// - Métodos de matrices.
// - Funciones. -
// - Funciones de flecha.
// - Variables. -
// - Declaración de variables de ES6.
// - Objetos
//------------------------------------------------

class Finanza {
  constructor(presupuesto) {
    this.presupuesto = presupuesto;

    this.gastos = [];
  }
  agregarPresupuesto(monto) {
    // console.log(monto)
    if (isNaN(monto) || monto <= 0) {
      alert("Ingrese un monto valido");
    } else {
      this.presupuesto += Number(monto);
    }
  }
  agregarGasto(gasto) {
    if (isNaN(gasto.monto) || gasto.monto <= 0) {
      alert("Ingrese un monto valido");
    } else {
      this.gastos.push(gasto);
    }
  }
  eliminarGasto() {
    //obtener y eliminar con splice
  }
  saldo() {
    //this.presupuesto - this.totalgastos retur gasto funcion
  }
  totalGastos() {
    //ocupar reduce metodo array  ---- buscar
  }
}

// PESUPUESTO-------------------------------------
// class Presupuesto {
//   constructor(monto) {
//     this.monto = monto; //
//     this.gastos = [];
//   }
//   agregarMonto(monto) {
//     // console.log(monto)
//     if (isNaN(monto) || monto <= 0) {
//       alert("Ingrese un monto valido");
//     } else {
//       this.monto += parseInt(monto);
//     }
//   }
//   restarSaldo() {}
//   mostrarSaldo() {}
// }
//la inicio con monto 0
const presupuesto = new Finanza(0);

const botonAgregarMonto = document.getElementById("enviopresupuesto");
botonAgregarMonto.addEventListener("click", agregarMontoPresupuesto);

function agregarMontoPresupuesto() {
  const ingresoMonto = document.getElementById("presupuesto").value;
  presupuesto.agregarMonto(ingresoMonto);
  // console.log(presupuesto.monto);
}

// GASTOS -----------------------------------

// objeto Gasto
class Gastos {
  constructor(nombre, monto) {
    this.id = new Date().getTime();
    this.nombre = nombre;
    this.monto = monto;
  }
}

//uuid  buscar libreria cdn

const botonAgregarGasto = document.getElementById("enviogasto");
botonAgregarGasto.addEventListener("click", agregarGasto);

function agregarGasto() {
  const montoGasto = document.getElementById("montogasto").value;
  console.log(montoGasto);
  const nombreGasto = document.getElementById("nombregasto").value;
  console.log(nombreGasto);
  const nuevogasto = new Gastos(nombreGasto, montoGasto);
  presupuesto.agregarGasto(nuevogasto);
  console.log(presupuesto);

  // nuevogasto.agregarGasto(montoGasto,nombreGasto);
  // console.log(nuevogasto.montogasto);
  // nuevogasto.registrosgastos.push({ monto: montoGasto,nombre: nombreGasto });

  // console.log(nuevogasto.registrosgastos);
  // nuevogasto.montogasto
}

function actualizarGasto() {
  /*
recorro con for 
  y pinto en la tabla 
  interpolacion ${nombre}
  
  */
}
// nombre Gasto
// monto Gasto
// instancias gasto1(gasto, nombre);
// arraygastos[];
