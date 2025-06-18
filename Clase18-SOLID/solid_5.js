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
    //medioDePago seria del tipo de la interfaz o clase base y no de un tipo de medio de pago especifico
  constructor(medioDePago) {
    this.medioDePago = medioDePago; // Recibe una abstracción, no una clase concreta
  }

  realizarPago() {
    this.medioDePago.pagar();
  }

  cambiarMedioDePago(nuevoMedioDePago) {
    this.medioDePago = nuevoMedioDePago;
  }
}

let p = new Pagar(new TarjetaCredito());
p.realizarPago();
p.cambiarMedioDePago(new Efectivo());
p.realizarPago();
p.cambiarMedioDePago(new TarjetaDebito());
p.realizarPago();
