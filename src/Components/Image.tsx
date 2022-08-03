import axios from "axios"
import { Request } from "express"
import { resolve } from "node:path/win32"
import React from "react"
import {useState} from 'react'

interface Iprop {
    updatePostsAfterUpload?:Function,
    cancelButtonHandler?:Function
}


const url = "https://server-for-social.onrender.com"
const devUrl = "http://localhost:8001"

const Image: React.FC = (props:Iprop) => {

    const [file, setFile] = useState< Blob>()
    const [fileEncoded, setFileEncoded] = useState<ArrayBuffer | string>()
    const [fileName, setFileName] = useState<string>()
    const [name, setName] = useState<string>()
    

   
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        const file = e.target.files![0];
        const reader = new FileReader
        reader.onload=(e)=>{
            // console.log(e.target?.result!)
            setFileEncoded(e.target?.result!)
        }
        reader.readAsBinaryString(file)
        setFileName(e?.target.files![0].name)
    }
  
    console.log(fileName)
    
    const onSelectFile = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {

        const s3URL = axios.post(
            `${devUrl}/postImageToS3`,
            {
                image: fileEncoded,
                imageName: fileName,
                name: name
            }
        );
        // props.updatePostsAfterUpload?.()
    }
   
    // console.log(fileName)
    // console.log(file)



    


    return (
    <>
    <div><p>COMING SOON</p>
        <input placeholder="name" onChange={(e)=>{setName(e.target.value)}}></input>
        <a href="https://github.com/amauryplayero/Social/blob/main/src/Components/Image.tsx" target="_blank">But you can see my progress here</a>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-768x432.png" style={{width: '40px'}}></img>
    </div>
        <input type='file' id="chooseFileButton" onChange={(e)=>handleChange(e)}></input>
        <button id="uploadImageButton" onClick={(e)=>onSelectFile(e)}>post
        </button>
  
    
    </>
    )
}

export default Image