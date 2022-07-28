import axios from "axios"
import { Request } from "express"
import React from "react"
import {useState} from 'react'



const url = "https://server-for-social.onrender.com"
const devUrl = "http://localhost:8001"

const Image: React.FC = () => {
    const [file, setFile] = useState<string | Blob>()
    const [fileArrayBuffer, setFileArrayBuffer] = useState<ArrayBuffer | string>()
    const [fileName, setFileName] = useState<string>()
    

   
    // console.log(fileName)
    // console.log(file)
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        let fileInputted:Blob = e.target.files![0]
        setFile(fileInputted)
        setFileName(e.target.files?.[0].name) 
    }



    const handleImagePost = ():void =>{
        const formData = new FormData()

        formData.append('file',file!)
        formData.append('fileName', fileName!)

        // interface RequestInit {
        //     method: string,
        //     body: {name:string}
        // }
      
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name:formData})
            
        };

        try{
            // fetch(`${devUrl}/postImageToS3`,options)
            //         .then(res=>{return res.json()})
            //         .then(data=>{console.log(data)}) 
         
        } 
        catch(err){
            console.log(err)
        }
    }


    return (
    <>
    <div>COMING SOON</div>
   
        <input type='file' id="chooseFileButton" onChange={(e)=>handleChange(e)}></input>
        <button id="uploadImageButton" onClick={()=>handleImagePost()}>post
        </button>
  
    
    </>
    )
}

export default Image