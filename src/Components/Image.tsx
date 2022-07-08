import React from "react"
import {useState} from 'react'



const Image = (): JSX.Element => {
    const [image, setImage] = useState()

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void=>{
        console.log(e)
        

    }


    return (
    <>
    <div>image</div>
    <input type='file' onChange={(e)=>handleChange(e)}></input>
    <button
    //  onClick={}
    >post</button>
    </>
    )
}

export default Image