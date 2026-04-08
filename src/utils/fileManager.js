const fs = require("fs");

function leerJSON(ruta) {
    try {
        const data = fs.readFileSync(ruta, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function escribirJSON(ruta, data) {
    fs.writeFileSync(ruta, JSON.stringify(data, null, 2));
}

module.exports = {
    leerJSON,
    escribirJSON
};