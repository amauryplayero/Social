import axios from "axios"
import { Request } from "express"
import { resolve } from "node:path/win32"
import React from "react"
import {useState} from 'react'



const url = "https://server-for-social.onrender.com"
const devUrl = "http://localhost:8001"

const Image: React.FC = () => {
    const [file, setFile] = useState< Blob>()
    const [fileArrayBuffer, setFileArrayBuffer] = useState<ArrayBuffer | string>()
    const [fileName, setFileName] = useState<string>()
    

   
    
    const handleChange = async (e:React.ChangeEvent<HTMLInputElement>):Promise<void>=>{
        const file = e?.target.files![0]
        const convertedFile = await convertToBase64(file)
    }
    const convertToBase64 = (file:File) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    const onSelectFile = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):Promise<void> => {
        const file = e.target.files![0];
        const convertedFile = await convertToBase64(file);
        const s3URL = await axios.post(
            `${devUrl}/postImageToS3`,
            {
                image: convertedFile,
                imageName: file.name
            }
        );
    }
   
    // console.log(fileName)
    // console.log(file)



    


    return (
    <>
    <div><p>COMING SOON</p>
        <a href="https://github.com/amauryplayero/Social/blob/main/src/Components/Image.tsx">But you can see my progress here</a>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-768x432.png" style={{width: '40px'}}></img>
    </div>
        <input type='file' id="chooseFileButton" onChange={(e)=>handleChange(e)}></input>
        <button id="uploadImageButton" onClick={(e)=>onSelectFile(e)}>post
        </button>
  
    
    </>
    )
}

export default Image