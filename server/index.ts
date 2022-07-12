import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv'
import path from 'path'
import {test} from './controller'


dotenv.config({ path: '../.env' });

const app: Express = express();
const PORT = 8000;

app.use(express.json({limit: '25mb'}))
app.use(express.static(path.resolve(__dirname, '../build')))



app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });


  
  app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
  });