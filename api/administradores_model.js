const conexion = require("./conexion");
var md5 = require('md5');
const jwt = require('jsonwebtoken');
module.exports = {
  buscar(username, password) {
    const hashed_password = md5(password.toString())
    return new Promise((resolve, reject) => {
      conexion.query('SELECT * FROM users WHERE username = ? AND password = ?',
        [username, hashed_password], (err, result, fields) =>{
          if (err) {
            reject(err);
          }
          else {
            let token = jwt.sign({ data: result }, 'secret')
            resolve({ status: 1, data: result, token: token });
          }
        });
    });
  },
}