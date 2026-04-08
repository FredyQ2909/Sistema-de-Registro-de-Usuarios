const path = require("path");
const { leerJSON, escribirJSON } = require("../utils/fileManager");

const FILE = path.join(__dirname, "../data/users.json");

// Obtener usuarios
function obtenerUsuarios() {
    return leerJSON(FILE);
}

// Registrar usuario
function registrarUsuario(nombre, correo, contraseña) {
    const usuarios = obtenerUsuarios();

    const existe = usuarios.find(u => u.correo === correo);
    if (existe) {
        console.log("❌ El correo ya existe");
        return;
    }

    const nuevoUsuario = {
        id: Date.now(),
        nombre,
        correo,
        contraseña
    };

    usuarios.push(nuevoUsuario);
    escribirJSON(FILE, usuarios);

    console.log("✅ Usuario registrado");
}

// Listar usuarios
function listarUsuarios() {
    const usuarios = obtenerUsuarios();

    if (usuarios.length === 0) {
        console.log("⚠️ No hay usuarios");
        return;
    }

    console.log("\n📋 Usuarios:");
    usuarios.forEach(u => {
        console.log(`- ${u.nombre} | ${u.correo}`);
    });
}

module.exports = {
    registrarUsuario,
    listarUsuarios
};