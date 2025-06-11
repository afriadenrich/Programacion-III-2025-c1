const bcrypt = require("bcrypt");
const crypto = require("node:crypto");

// Hash != Encriptar != Codificar

// Hash -> no es reversible
// password original + aleatorio / contraseña = 8v8dfvs'mvsd08v'
// password originalx + aleatorio / contraseña = 8v8dfvsczxczc08v'

// Encriptar -> es reversible
// original + password secreta del servidor = v98sdvm0dvdsvsv
// v98sdvm0dvdsvsv - password secreta del servidor = original

// Codificar -> es reversible - No oculta la información
// 19 -> 10011 -> 19

// Hasheo con bcrypt
const salt = bcrypt.genSaltSync(12);

console.log("sal: ", salt, "\n");
const hasheo = bcrypt.hashSync("123456", salt);

console.log("Hasheo: ", hasheo, "\n");

// sal    -> $2b$10$wZ6aCwAjecXoDfJrvNiUIu
// 123456 -> $2b$10$wZ6aCwAjecXoDfJrvNiUIuZ2MnpW1.iBZbejwL44wUjX336uYs8k6

// sal    -> $2b$15$XN2pRlSFYGVBhRoByAf2Au
// 123456 -> $2b$15$XN2pRlSFYGVBhRoByAf2AuerUtIXcfyhQEIPaI39lrMmi7Wq/aywi

const comparacionFalsa = bcrypt.compareSync(
  "1234567",
  "$2b$12$XpSYa/To8W4QILxVoRSSceJZFUuStWaHGu7Irg9KFb.S2aG1ZqgeW"
);

console.log("Comparacion: " + comparacionFalsa);

const comparacionVerdadera = bcrypt.compareSync(
  "123456",
  "$2b$12$XpSYa/To8W4QILxVoRSSceJZFUuStWaHGu7Irg9KFb.S2aG1ZqgeW"
);

console.log("Comparacion: " + comparacionVerdadera);

console.log("\n");
console.log("\n");
// Encriptación

// Acrónimos:
// AES -> Advanced Encryption Standard
// IV -> Vector de inclinación
// GCM (Galois/Counter Mode)
// CCM (Counter with CBC-MAC)
// GCM y CCM son similares porque vienen de algoritmos similares
// OCB (OCB Authenticated Encryption) -> pensado para mensajes

const passDelUsuario = "12345678912345";
const passDelServer = "contraseña-secreta-del-servidor";

function encriptar(passDelUsuario) {
  const iv = crypto.randomBytes(16);
  console.log("iv: ", iv, "\n");
  const encriptador = crypto.createCipheriv("aes-256-gcm", passDelServer, iv);

  console.log("encriptador: ", encriptador, "\n");

  let encriptado = encriptador.update(passDelUsuario, "utf-8", "hex");

  encriptado += encriptador.final("hex");

  const tag = encriptador.getAuthTag();
  console.log(encriptado);
  return { encriptado, tag, iv };
}

function desencriptar(encriptado, iv, tag) {
  const desencriptador = crypto.createDecipheriv(
    "aes-256-gcm",
    passDelServer,
    iv
  );

  desencriptador.setAuthTag(Buffer.from(tag, "hex"));
  let desencriptado = desencriptador.update(encriptado, "hex", "utf-8");
  desencriptado += desencriptador.final();

  console.log(desencriptado);
}

const { encriptado, iv, tag } = encriptar("123456");

desencriptar(encriptado, iv, tag);
