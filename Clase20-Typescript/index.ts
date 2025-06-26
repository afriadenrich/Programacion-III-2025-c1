const nombre: string = "Hola";

function saludar(saludo: string): void {
  console.log(saludo);
}

function saludarString(saludo: string): string {
  return saludo;
}

saludar("Hola clase");

// traspilación ts a js

class Algo {
  nombre: string | undefined;
  apellido: string | undefined;
}

const algo = new Algo();

console.log(typeof algo.nombre);

const array: Algo[] = [
  {
    nombre: "a",
    apellido: "a",
  },
];

const objeto: number = 0;

//
async function peticion() {
  const info: RequestInit = {
    body: JSON.stringify({ algo: "algo" }),
    method: "POST",
  };
  const promesaDePeticion: Promise<Response> = fetch("", info);
}
