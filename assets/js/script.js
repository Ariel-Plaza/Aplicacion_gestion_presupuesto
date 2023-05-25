
class Finanza {
  constructor(presupuesto) {
    this.presupuesto = presupuesto;
    this.gastos = [];
  }
  agregarPresupuesto(monto) {
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
  eliminarGasto(id) {
    this.gastos = this.gastos.filter((gasto) => gasto.id != id);
    return this.gastos;
  }
  saldo() {
    return this.presupuesto - this.totalGastos();
  }
  totalGastos() {
    const res = this.gastos.reduce((acc, gasto) => {
      return acc + parseFloat(gasto.monto);
    }, 0);
    return res;
  }
}

class Gastos {
  constructor(nombre, monto) {
    this.id = new Date().getTime();
    this.nombre = nombre;
    this.monto = monto;
  }
}

const presupuesto = new Finanza(0);

// Agregar presupuesto
const botonAgregarMonto = document.getElementById("enviopresupuesto");
botonAgregarMonto.addEventListener("click", agregarMontoPresupuesto);

function agregarMontoPresupuesto() {
  const ingresoMonto = document.getElementById("presupuesto").value;
  presupuesto.agregarPresupuesto(ingresoMonto);
  document.getElementById("presupuestoTabla").innerText = presupuesto.presupuesto;
}

const botonAgregarGasto = document.getElementById("enviogasto");
botonAgregarGasto.addEventListener("click", agregarGasto);

function agregarGasto() {
  const montoGasto = document.getElementById("montogasto").value;
  const nombreGasto = document.getElementById("nombregasto").value;
  const nuevogasto = new Gastos(nombreGasto, montoGasto);

  presupuesto.agregarGasto(nuevogasto);
  refrescarTabla();
  mostrarGastoTabla();
}

function mostrarGastoTabla() {
  let mostrarGastos = document.getElementById("tbody");
  let nuevogasto = "";

  presupuesto.gastos.forEach((gasto, id) => {
    nuevogasto += `<tr><td>${gasto.nombre}</td>
                              <td>${gasto.monto}</td><td>
                              <svg onclick="eliminarGastoboton('${gasto.id}')"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"  ><path
                              d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/></svg></td></tr>`;
  });
  mostrarGastos.innerHTML = nuevogasto;
}

function eliminarGastoboton(id) {
  let respuesta = presupuesto.eliminarGasto(id);
  mostrarGastoTabla();
  refrescarTabla();
}

const refrescarTabla = () => {
  let mostrarPresupuesto = document.getElementById("presupuestoTabla");
  let mostrarGastos = document.getElementById("gastosTabla");
  let mostrarSaldo = document.getElementById("saldoTabla");

  mostrarPresupuesto.innerText = presupuesto.presupuesto;
  mostrarGastos.innerText = presupuesto.totalGastos();
  mostrarSaldo.innerText = parseInt(presupuesto.saldo());
};
