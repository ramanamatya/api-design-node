import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/api', (req, res) => {
  res.send(
    [{
      title: 'This is your API title',
      description: 'Here is the required descriptions',
    }]
  );
});

const port = process.env.PORT || 8081;
const start = async () => {
  try {
    await
    app.listen(port, () => {
      console.log(`REST API on http://localhost:${port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

start();
