import { ConnectionPool } from 'mssql';

const dbConfig = {
  user: 'ivan',
  password: '1234',
  server: 'IVAN\SQLEXPRESS',
  database: 'notesdb',
  options: {
    encrypt: false,
    enableArithAbort: true
  }
};


export const poolPromise: Promise<ConnectionPool> = new ConnectionPool(dbConfig)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => {
    console.error('Database Connection Failed! Bad Config: ', err);
    throw err; 
  });
