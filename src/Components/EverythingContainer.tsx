import React, { useEffect } from 'react'
import {useState} from 'react'
import Drawing from './Drawing'
import Options from './Options'


const EverythingContainer = ():JSX.Element =>{
    let posts 
   
    

   
        fetch("http://localhost:8000/getAllPosts",{
                    method: 'GET',
                }).then(res=>{console.log(res)})
    


   

    
    

  



    return(
        <>
        <div id="EverythingContainer">
            Leave a message!
            <div id="iconsContainer">
                <Options />
            </div>
            <div id="commentsContainer">


            </div>

        </div>
        </>
    )
}

export default EverythingContainer