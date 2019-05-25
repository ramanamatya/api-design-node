import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './database';
import listingRouter from './sources/listing/listing.router';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/listing', listingRouter);

const port = process.env.PORT || 8081;
const start = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`API hosting on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
