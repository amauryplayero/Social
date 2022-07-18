import S3 from 'aws-sdk/clients/s3'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' });


const ID = process.env.ID
const SECRET = process.env.SECRET
const BUCKET_NAME = process.env.BUCKET_NAME
const KEY:string = process.env.KEY

interface S3Parameters {
    Bucket: string,
    Key: string,
    Body: string

}

const s3 = new S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
    });


const test = ():void =>{
    
    
}

const postTextToS3 = (req:Request, res:Response):void =>{
    let params: S3Parameters = {
    Bucket: BUCKET_NAME,
    Key: KEY,
    Body: req.body.text
    }
    s3.upload(params, function(err, data){
        if(err) {
            throw err
            }
        console.log(`file uploaded suzzessfully at ${data.Location}`)
    })
    res.status(200).send("Success!").catch(
        err=> res.status(400).send(err)
    )


}

export {
    test,
    postTextToS3, 

}