//? Creación de class Usuario

class Usuario {

    constructor (nombre_usuario, contraseña, email, pais_origen) {
        this.nombre_usuario = nombre_usuario
        this.contraseña = contraseña
        this.email = email
        this.pais_origen = pais_origen
}
eco() {
    if (pais == "" && email == "") {
        alert("Tu usuario es: " + this.nombre_usuario + " " + "y tu contraseña es: " + this.contraseña)
    } else if (email == "") {
        alert("Tu usuario es: " + this.nombre_usuario + " " + ", tu contraseña es: " + this.contraseña + " " + "y tu pais de origen es: " + this.pais_origen)
    }else if (pais == ""){
        alert("Tu usuario es: " + this.nombre_usuario + " " + ", tu contraseña es: " + this.contraseña + " " + "y tu email es: " + this.email)
    } else {
        alert("Tu usuario es: " + this.nombre_usuario + " " + ", tu contraseña es: " + this.contraseña + " " + ", tu email es: " + this.email + " " + "y tu pais de origen es: " + this.pais_origen)
    }
}
}

//*-------------------------------------------------------------------------------------------------------------
//? SECCION REGISTRO

let user = prompt("ingrese su nombre de usuario: ")
let password = prompt("ingrese su contraseña: ")
let email = prompt("ingrese su email (opcional): ")
let pais = prompt("ingrese su pais de origen (opcional): ")


const usuario1 = new Usuario(user, password, email, pais)

console.log(usuario1)
usuario1.eco()

//*-------------------------------------------------------------------------------------------------------------
//? SECCION LOGIN

function preguntar() {

    
    let pregunta = prompt("si desea logearse escriba 'si', si no desea logearse escriba 'no'. Note que si no esta logeado no podra continuar.")
    
    if (pregunta === "si") {
        login()
    } else {
        alert("No puede continuar sin logearse, volviendo atras.")
        preguntar()
    }
}

preguntar()

function login() {
    let intentos = 0;
    const maxIntentos = 3;
    let usuario_login;
    let contraseña_login;

    do {
        usuario_login = prompt("Ingrese su nombre de usuario registrado:");
        contraseña_login = prompt("Ingrese su contraseña registrada:");

        if (usuario_login === usuario1.nombre_usuario && contraseña_login === usuario1.contraseña) {
            alert("¡Has ingresado exitosamente! Ahora continuarás a la página.");
            return;
        } else {
            alert("Algún dato ingresado no es correcto, por favor vuelve a intentarlo.");
            intentos++;
        }
    } while (intentos < maxIntentos);

    alert("Ha fallado sus tres intentos. Por favor recargue la página.");
}

//*-------------------------------------------------------------------------------------------------------------