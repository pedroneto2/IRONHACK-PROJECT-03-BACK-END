import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';
import initDBConnection from './configs/database';

const app = express();
dotenv.config();

initDBConnection();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());
app.use('/', routes);

app.use((error, req, resp, next) => {
  // console.log(error);
  resp.status(error.status || 500).json({ message: error.message });
});

export default app;
