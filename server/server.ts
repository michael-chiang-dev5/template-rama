import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';

import path from 'path';

const app = express();
const PORT = 8080;

// serve index.html
app.get('/', (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.get('/api', (req: Request, res: Response) => {
  return res.status(200).json({ a: 'b' });
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
