import S3 from 'aws-sdk/clients/s3'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' });

const ID = process.env.ID
const SECRET = process.env.SECRET

const s3 = new S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
    });


const test = ():void =>{
    
}

const postTextToS3 = ():void =>{
    console.log('postTextToS3 function fired')


}

export {
    test,
    postTextToS3, 

}