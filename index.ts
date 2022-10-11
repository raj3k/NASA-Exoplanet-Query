import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (request: Request, response: Response) => {
  response.send('Express + TypeScript App is running')
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})