const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
];

//Simula la carga de una imagen con delay
function loadImage(image, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Cargada: ${image}`);
      resolve(image);
    }, delay);
  });
}

//1. FOR tradicional (secuencial)
async function loadWithFor() {
  console.log("\nFOR tradicional (secuencial)");
  console.time("Tiempo for");
  for (let i = 0; i < images.length; i++) {
    await loadImage(images[i], 500);
  }
  console.timeEnd("Tiempo for");
}

//2. FOR...OF (secuencial también)
async function loadWithForOf() {
  console.log("\nFOR...OF (secuencial)");
  console.time("Tiempo for...of");
  for (const image of images) {
    await loadImage(image, 500);
  }
  console.timeEnd("Tiempo for...of");
}

//3. forEach (concurrente, sin control)
function loadWithForEach() {
  console.log("\nforEach (concurrente sin control)");
  console.time("Tiempo forEach");

  let completed = 0;
  images.forEach((image) => {
    loadImage(image, 500).then(() => {
      completed++;
      if (completed === images.length) {
        console.timeEnd("Tiempo forEach");
      }
    });
  });
}

//4. map + Promise.all (concurrente controlada)
async function loadWithPromiseAll() {
  console.log("\nPromise.all (concurrente controlada)");
  console.time("Tiempo Promise.all");
  const promises = images.map((image) => loadImage(image, 500));
  await Promise.all(promises);
  console.timeEnd("Tiempo Promise.all");
}

// Ejecutamos los métodos uno despues de otro con pausas para ver diferencias
async function runAll() {
  await loadWithFor();
  console.log("FIN for");
  await wait(2000);

  await loadWithForOf();
  console.log("FIN for...of");
  await wait(2000);

  loadWithForEach();
  console.log("forEach no espera (ver orden)");
  console.log("hola loadWithForEach");
  await wait(2000);

  await loadWithPromiseAll();
  console.log("hola loadWithPromiseAll");
  console.log("FIN Promise.all");
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

runAll();
