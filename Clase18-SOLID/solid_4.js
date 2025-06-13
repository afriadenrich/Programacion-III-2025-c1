// Interfaz grande que obliga a todos los métodos de pago a implementar métodos innecesarios
class MedioDePago {
  pagar() {
    throw new Error("Este método debe ser implementado");
  }

  procesarPagoOnline() {
    throw new Error("Este método debe ser implementado");
  }

  calcularCuotas() {
    throw new Error("Este método debe ser implementado");
  }
}

// Clase Efectivo: No necesita procesarPagoOnline ni calcularCuotas
class Efectivo extends MedioDePago {
  pagar() {
    console.log("Pagando en efectivo");
  }

  procesarPagoOnline() {
    throw new Error("Efectivo no soporta pagos online");
  }

  calcularCuotas() {
    throw new Error("Efectivo no soporta cálculo de cuotas");
  }
}

// Clase TarjetaCredito: Implementa todos los métodos
class TarjetaCredito extends MedioDePago {
  pagar() {
    console.log("Pagando con tarjeta de crédito");
  }

  procesarPagoOnline() {
    console.log("Procesando pago online con tarjeta de crédito");
  }

  calcularCuotas() {
    console.log("Calculando cuotas para tarjeta de crédito");
  }
}

//Despues

// Interfaces más específicas
class Pago {
  pagar() {
    throw new Error("Este método debe ser implementado");
  }
}

class PagoOnline {
  procesarPagoOnline() {
    throw new Error("Este método debe ser implementado");
  }
}

class PagoConCuotas {
  calcularCuotas() {
    throw new Error("Este método debe ser implementado");
  }
}

// Clases que implementan solo las interfaces necesarias
class Efectivo extends Pago {
  pagar() {
    console.log("Pagando en efectivo");
  }
}

// TarjetaCredito implementa interfaces adicionales según su funcionalidad
// En js no existen las intefaces y no se admite la herencia multiple
class TarjetaCredito extends Pago /*, PagoConCuotas*/ {
  pagar() {
    console.log("Pagando con tarjeta de crédito");
  }

  calcularCuotas() {
    console.log("Calculando");
  }
}
