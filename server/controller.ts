import S3 from 'aws-sdk/clients/s3'
import dotenv from 'dotenv'
import {Request, Response} from 'express';

dotenv.config({ path: '../.env' });


const ID = process.env.ID
const SECRET = process.env.SECRET
const BUCKET_NAME = process.env.BUCKET_NAME
const KEY = process.env.KEY

interface S3Parameters {
    Bucket?: string ,
    Key?: string ,
    Body?: string 
}

const s3 = new S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
    params: {Bucket: BUCKET_NAME}
    
    });


const test = ():void =>{
    
    
}

const postTextToS3 = (req:Request, res:Response):void =>{
    let requestBody:string = req.body.text
    
    let parameters:S3Parameters = {
    Bucket: BUCKET_NAME,
    Key: KEY,
    Body: requestBody
    };

   s3.upload(parameters, function(err, data){
        if(err) {
            throw err
        } else{
        console.log(`file uploaded suzzessfully at ${data.Location}`)
        res.status(200).send("Success!")
        }
    })
}

const postImageToS3 = (req:Request, res:Response):void =>{
    let parameters = {
        Bucket: BUCKET_NAME,
        Key: KEY,
    }
    console.log(req.body)
    // s3.upload(parameters, function (err:Error, data:Object){

    // })
    res.status(200).send(`${req.body.image}`)

}



export {
    test,
    postTextToS3, 
    postImageToS3

}