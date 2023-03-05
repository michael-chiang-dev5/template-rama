import { appCreator } from './appCreator';
const PORT = 8080;

// const dbPostgreSQL = require('../db/dbPostgreSQL.js');

// start server
const app = appCreator();

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
