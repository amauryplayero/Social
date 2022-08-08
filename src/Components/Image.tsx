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

const Image: React.FC<Iprop> = (props:Iprop) => {

    const [file, setFile] = useState< Blob>()
    const [fileEncoded, setFileEncoded] = useState<ArrayBuffer | string>()
    const [fileName, setFileName] = useState<string>()
    const [name, setName] = useState<string>()
    

   //
    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        const file = e.target.files![0];
        const reader = new FileReader
        reader.onload=(e)=>{
            // console.log(e.target?.result!)
            // const jsonBinary = e.target?.result!
            setFileEncoded(e.target?.result!)
        }
        reader.readAsBinaryString(file)
        setFileName(e?.target.files![0].name)
    }
  
   
    
    const onSelectFile = (e:any):void => {
        e.preventDefault()
        const nameInputted= e.target[0].value
        const descriptionInputted = e.target[1].value
        
        console.log(e)

      
        axios.post(
            `${url}/postImageToS3`,
            {
                image: fileEncoded,
                imageName: fileName,
                name: nameInputted,
                description: descriptionInputted
            }
        ).then(res=>{
            console.log('then fired inside the post')
            // props.updatePostsAfterUpload?.()

        })
    }
   

    return (
    <>
    <form onSubmit={(e:any):void=>onSelectFile(e)}>
    <div>
        
        <input placeholder="name" name='name' id="nameInput"></input>
        <input placeholder="description (optional)" name='description' id="descriptionInput"></input>
        {/* <a href="https://github.com/amauryplayero/Social/blob/main/src/Components/Image.tsx" target="_blank">But you can see my progress here</a>
        <img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-768x432.png" style={{width: '40px'}}></img> */}
    </div>

        <input type='file' id="chooseFileButton" onChange={(e)=>handleChange(e)}></input>
        <input value="post image" type="submit" id="uploadImageButton" ></input>
    </form>
  
    
    </>
    )
}

export default Image