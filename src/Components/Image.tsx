import React from "react"
import {useState} from 'react'


const url = "https://server-for-social.onrender.com"
const devUrl = "http://localhost:8001"

const Image: React.FC = () => {
    const [image, setImage] = useState()
    

    
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        // const input = e.target.files![0]
        // const reader = new FileReader();
        // reader.onload!(function (event:ProgressEvent<FileReader>):void{
        //     console.log("this never works : ", event);
        //     console.log(event);
        // });
        // reader.readAsText(input)
        // // setImage(e.target.value) 
        // // e.target.files[0]
        console.log(e)
        
    }

    const handleImagePost = ():void =>{
        const params = {
           image:'image for now'
        };
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(params)
        };
        
        try {
            fetch(`${devUrl}/postImageToS3`,options)
                .then(res=>{console.log(res)}
            )
        }
        catch {
           
        }

        

    }


    return (
    <>
    <div>COMING SOON</div>
    <input type='file' id="chooseFileButton" onChange={(e)=>handleChange(e)}></input>
    <button id="uploadImageButton"
     onClick={()=>handleImagePost()}
    >post</button>
    <img src={image}></img>
    </>
    )
}

export default Image