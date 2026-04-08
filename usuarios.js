const fs = require("fs");

const FILE = "users.json";

// Leer usuarios
function obtenerUsuarios() {
    try {
        const data = fs.readFileSync(FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Guardar usuarios
function guardarUsuarios(usuarios) {
    fs.writeFileSync(FILE, JSON.stringify(usuarios, null, 2));
}

// Registrar usuario
function registrarUsuario(nombre, correo, contraseña) {
    const usuarios = obtenerUsuarios();

    // Validar si ya existe el correo
    const existe = usuarios.find(u => u.correo === correo);
    if (existe) {
        console.log(" El correo ya está registrado");
        return;
    }

    const nuevoUsuario = {
        id: Date.now(),
        nombre,
        correo,
        contraseña
    };

    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);

    console.log(" Usuario registrado correctamente");
}

// Listar usuarios
function listarUsuarios() {
    const usuarios = obtenerUsuarios();

    if (usuarios.length === 0) {
        console.log(" No hay usuarios registrados");
        return;
    }

    console.log("\ Lista de usuarios:");
    usuarios.forEach(u => {
        console.log(`- ${u.nombre} | ${u.correo}`);
    });
}

module.exports = {
    registrarUsuario,
    listarUsuarios
};