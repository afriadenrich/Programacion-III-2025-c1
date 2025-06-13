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

// Nueva clase que implementa otro método de pago sin modificar pagar
class TarjetaDebito {
  pagar() {
    console.log("Pagando con tarjeta de débito");
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
let pTD = new Pagar(new TarjetaDebito());
pTD.realizarPago();
