import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import path from 'path'

const app: Express = express();

app.use(express.json({limit: '25mb'}))
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../build')))


