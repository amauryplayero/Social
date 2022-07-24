import React, { useEffect } from 'react'
import {useState} from 'react'
import Drawing from './Drawing'
import Options from './Options'


const EverythingContainer = ():JSX.Element =>{
    const [posts, setPosts] = useState<String[]>([])
    // let posts:string[] = []
   
    

   useEffect(()=>{
    fetch("http://localhost:8000/getAllPosts",{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(res=>{return res.json()})
    .then(data=>{
        // setPosts(data)
    console.log(data)})

   },[])
     
    console.log('it fired')
    
       

   

    
    

  



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