import S3 from 'aws-sdk/clients/s3'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' });
// import {ID, SECRET, BUCKET_NAME, KEY} from 'dotenv'
const ID = process.env.ID
const SECRET = process.env.SECRET

const s3 = new S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
    });


const test = ():void =>{
    
}

export {
    test,

}