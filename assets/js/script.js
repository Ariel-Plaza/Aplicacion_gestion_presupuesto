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


// PESUPUESTO-------------------------------------
class Presupuesto {
  constructor(monto) {
    this.monto = monto; //
    this.gastos = [];
  }
  agregarMonto(monto) {
    // console.log(monto)
    if (isNaN(monto) || monto <= 0) {
      alert("Ingrese un monto valido");
    } else {
      this.monto += parseInt(monto);
    }
  }
  restarSaldo() {}
  mostrarSaldo() {}
}
//la inicio con monto 0
const presupuesto = new Presupuesto(0);




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
  constructor(nombre, gasto) {
    this.nombregasto = nombre;
    this.montogasto = gasto;
    this.registrosgastos = [];
  }
  agregarGasto(gasto) {
    if (isNaN(gasto) || gasto <= 0) {
      alert("Ingrese un monto valido");
    } else {
      this.montogasto += parseInt(gasto);
      
    }
  }
}

const nuevogasto = new Gastos("",0);

const botonAgregarGasto = document.getElementById("enviogasto");
botonAgregarGasto.addEventListener("click", agregarGasto);

function agregarGasto() {
  const montoGasto = document.getElementById("montogasto").value;
  console.log(montoGasto);
  const nombreGasto = document.getElementById("nombregasto").value;
  console.log(nombreGasto);

  nuevogasto.agregarGasto(montoGasto,nombreGasto);
  console.log(nuevogasto.montogasto);
  nuevogasto.registrosgastos.push({montoGasto, nombreGasto});
  
  console.log(nuevogasto.registrosgastos);
  // nuevogasto.montogasto
}

// nombre Gasto
// monto Gasto
// instancias gasto1(gasto, nombre);
// arraygastos[];