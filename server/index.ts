import express, {Express} from 'express'
import cors from 'cors'
import path from 'path'
const PORT:string | Number = process.env.PORT || 3003

const app: Express = express();

app.use(express.json({limit: '25mb'}))
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../build')))


app.listen(PORT, ()=>{console.log("listening on" + PORT)})
