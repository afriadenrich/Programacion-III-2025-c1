/** Clase usuario exportada */
class Usuario {
    nombre;
    /**
     * @type string
    */
    apellido;
    edad;

    get Nombre() {
        return this.nombre;
    }

    get NombreCompleto(){
        return this.nombre + " " + this.apellido;
    }

    /**
     * 
     * @param {Usuario} usuario2 
     * @param {Usuario} usuario1 
     */
    static Equals(usuario1, usuario2) {
        return usuario1.NombreCompleto === usuario2.NombreCompleto;
    }

    /**
     * Este es el constructor de la clase USUARIO!!!
     * @param {string} nombre 
     * @param {string} apellio 
     * @param {number} edad 
     * 
     * @returns {Usuario}
     */
    constructor(nombre, apellio, edad){
        
        // if(typeof nombre !== "string"){
        //     throw new Error("no es un nombre");
        // }
        this.apellido;
        this.edad;
        this.nombre = nombre;
        this.apellido = apellio;
        this.edad = edad;
    }

    saludar(){
        console.log(`Hola ${this.NombreCompleto} de ${this.edad} años`);
    }
}

// export { Usuario };
// const usuarioVacio = new Usuario(88, 888, 88);

// const cadena = usuarioVacio.saludar();
class Persona {

}

/** Clase persona! */
export { Persona };
export let nombre = "Algo";
export default Usuario;

