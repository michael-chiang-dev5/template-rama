import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

/*
pqQuery implements functionality to run a parameterized sql query on a
postgreSQL database specified by PG_URI. Pool keeps connection open for
some period of time to assist pooling of queries. 
*/
const pgQuery = (text: string, params: any[]) => {
  // This is just to visualize the sql command being sent to the database.
  // It isn't strictly needed but is useful for debugging.
  const sqlCommand = text.replace(/\$(\d+)/g, (match, index) => {
    return typeof params[index - 1] === 'string'
      ? `\'${params[index - 1]}\'`
      : params[index - 1];
  });
  console.log('running sql command: ', sqlCommand);
  // Return the result of the sql query
  return pool.query(text, params);
};

const getTables = async () => {
  const sql = 'SELECT * FROM information_schema.tables;';
  const data = await pgQuery(sql, []);
  return data.rows;
};

// db is an interface to interact with database
// We do it like this so it is easy to swap databases
//   pool can be used to forcibly disconnect
export const db = { pool, getTables };
