class MedioDePago {
  pagar() {
    throw new Error("Este método debe ser implementado");
  }
}

class TarjetaCredito extends MedioDePago {
  pagar() {
    console.log("Pagando con tarjeta de crédito");
  }
}

class TarjetaDebito extends MedioDePago {
  pagar() {
    console.log("Pagando con tarjeta de débito");
  }
}

class Efectivo extends MedioDePago {
  pagar() {
    console.log("Pagando en efectivo");
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
