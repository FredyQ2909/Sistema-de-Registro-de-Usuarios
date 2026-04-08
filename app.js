const readline = require("readline");
const { registrarUsuario, listarUsuarios } = require("./usuarios");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("\n===== SISTEMA DE USUARIOS =====");
    console.log("1. Registrar usuario");
    console.log("2. Listar usuarios");
    console.log("3. Salir");

    rl.question("Elige una opción: ", (opcion) => {
        switch (opcion) {
            case "1":
                rl.question("Nombre: ", (nombre) => {
                    rl.question("Correo: ", (correo) => {
                        rl.question("Contraseña: ", (contraseña) => {
                            registrarUsuario(nombre, correo, contraseña);
                            menu();
                        });
                    });
                });
                break;

            case "2":
                listarUsuarios();
                menu();
                break;

            case "3":
                console.log(" Saliendo...");
                rl.close();
                break;

            default:
                console.log(" Opción inválida");
                menu();
        }
    });
}

menu();