import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import cookieParser from 'cookie-parser';
import router from './routers/index.js';

import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { env } from './utils/env.js';
<<<<<<< Updated upstream

=======
import rootRouter from './routers/index.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { UPLOAD_DIR } from './constants/constants.js';
>>>>>>> Stashed changes

const PORT = Number(env('PORT', '3000'));
export const setupServer = () => {
  const app = express();
  
  app.use(cookieParser());
  app.use(express.json());
  app.use(cors());
  
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });

  app.use(router);

  app.use('*',notFoundHandler);

  app.use(errorHandler);

<<<<<<< Updated upstream
=======
  app.use('/uploads', express.static(UPLOAD_DIR));
>>>>>>> Stashed changes

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });

  return app;
};