import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv'
import path from 'path'
import {test, postTextToS3, postImageToS3} from './controller'
import cors from 'cors'

dotenv.config({ path: '../.env' });

const app: Express = express();
const PORT = 8000;



app.use(cors())
app.use(express.json({limit: '25mb'}))
app.use(express.static(path.resolve(__dirname, '../build')))



app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
  });

app.post('/postTextToS3', postTextToS3)
app.post('/postImageToS3', postImageToS3)



  
  app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
  });