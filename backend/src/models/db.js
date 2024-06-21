"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.poolPromise = void 0;
const mssql_1 = require("mssql");
const dbConfig = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server',
    database: 'your_database',
    options: {
        encrypt: true,
        enableArithAbort: true
    }
};
exports.poolPromise = new mssql_1.ConnectionPool(dbConfig)
    .connect()
    .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
})
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));
