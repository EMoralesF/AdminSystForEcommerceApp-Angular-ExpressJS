const conexion = require("./conexion")
module.exports = {
  obtener() {
    return new Promise((resolve, reject) => {
      conexion.query(`select id, username, email, password from users`,
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados);
        });
    });
  },
  eliminar(username) {
    return new Promise(async (resolve, reject) => {
      conexion.query(`delete from users
            where username = ?`,
        [username],
        (err) => {
          if (err) reject(err);
          else resolve();
        });
    });
  },
  insertar(id, username, email, password) {
    return new Promise((resolve, reject) => {
      conexion.query(`insert into users
            (id, username, email, password)
            values
            (?, ?, ?, ?)`,
        [id, username, email, password], (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        });
    });
  },
}