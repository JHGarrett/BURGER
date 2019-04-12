// const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root",
//     password: "root",
//     database: "burgers_db"
// })

// module.exports = connection

//make the connection
const mysql = require("mysql");

//EDIT THIS IF SOMETHING ISNT WORKING BC USUALLY THIS IS THE PROBLEM!!!!
let connection;
   if (process.env.JAWSDB_URL){
       connection = mysql.createConnection(process.env.JAWSDB_URL);
    } else {
        connection = mysql.createConnection({
            host: "localhost",
            port: 8889, 
            user: "root",
            password: "root",
            database: "burgers_db"
        });
    };
    

//export
module.exports = connection