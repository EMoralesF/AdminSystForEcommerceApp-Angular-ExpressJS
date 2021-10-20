const conexion = require("./conexion")
module.exports = {
  insertar(username, password) {//nombre y dirección.
    return new Promise((resolve, reject) => {
      conexion.query(`insert into clientes
            (nombre,direccion)
            values
            (?, ?)`,
        [username, password], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select id, nombre, direccion from clientes`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
}
