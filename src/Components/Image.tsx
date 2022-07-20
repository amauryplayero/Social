import React from "react"
import {useState} from 'react'




const Image: React.FC = () => {
    const [image, setImage] = useState<string>("")
    

    const reader = new FileReader();

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        const input = e.target.files![0]
        // reader.onload!((event:React.ChangeEvent<HTMLInputElement> ):void => {
        //     console.log("this never works : ", event);
        //     console.log(event);
        // });
        // reader.readAsText(input)
        // // setImage(e.target.value) 
        // // e.target.files[0]
        console.log(e)
        
    }

    const handleImagePost = async ():Promise<Boolean> =>{
        
        try {
            fetch('http://localhost:8000/postImageToS3', {
                method: 'POST',
                body: JSON.stringify({image:'olis for now'})}).then(res=>{ console.log(res) 
            
            })
        }
        catch {
            return false
        }

        return true

    }


    return (
    <>
    <div>image</div>
    <input type='file' id="chooseFileButton" onChange={(e)=>handleChange(e)}></input>
    <button id="uploadImageButton"
     onClick={()=>handleImagePost()}
    >post</button>
    <img src={image}></img>
    </>
    )
}

export default Image