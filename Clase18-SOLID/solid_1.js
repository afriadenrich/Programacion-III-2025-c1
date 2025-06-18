// class Pagar {
//   pagar(metodo) {
//     if (metodo === "efectivo") {
//       console.log("Pagando en efectivo");
//     } else if (metodo === "tarjetaCredito") {
//       console.log("Pagando con tarjeta de crédito");
//     } else if (metodo === "tarjetaDebito") {
//       console.log("Pagando con tarjeta de débito");
//     }
//   }
// }

// let p = new Pagar();
// p.pagar("efectivo");

// Después: Clase Pagar solo coordina pagos, delegando responsablidades a clases individuales
class Efectivo {
  pagar() {
    console.log("Pagando en efectivo");
  }
}

class TarjetaCredito {
  pagar() {
    console.log("Pagando con tarjeta de crédito");
  }
}

class Pagar {
  constructor(medioDePago) {
    this.medioDePago = medioDePago;
  }

  realizarPago() {
    this.medioDePago.pagar();
  }
}

let pTC = new Pagar(new TarjetaCredito());
pTC.realizarPago();
let pEF = new Pagar(new Efectivo());
pEF.realizarPago();
