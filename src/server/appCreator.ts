import express, {
  Request,
  Response,
  NextFunction,
  RequestHandler,
} from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

export const appCreator = function () {
  const app = express();
  const PORT = 8080;
  /*
   * Serves production build on route: localhost:8080
   * You must first build production files via: npm run build
   */
  // serves static files bundle.css, bundle.js
  app.use(express.static('dist'));
  // serves index.html
  app.get('/', (req: Request, res: Response) => {
    return res
      .status(200)
      .sendFile(path.resolve(__dirname, '../dist/index.html'));
  });

  app.get('/api', (req: Request, res: Response) => {
    console.log(process.env.PG_URI);
    return res.status(200).json({ a: 'b' });
  });

  return app;
};

// module.exports = app;
