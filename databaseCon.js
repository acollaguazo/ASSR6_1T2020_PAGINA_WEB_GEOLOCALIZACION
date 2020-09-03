const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
        host: "127.0.0.1",
        user:'root',
        //password: 'root',
        database:'g6_proy_geolocalizacion',
    });
    }
