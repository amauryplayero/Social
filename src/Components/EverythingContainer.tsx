import React, { ReactNode, useEffect } from 'react'
import {useState} from 'react'
import Drawing from './Drawing'
import Options from './Options'


const EverythingContainer = ():JSX.Element =>{
    interface Data{
        name:string,
        text_content:string
     }

    const [posts, setPosts] = useState<Data[]>([])
    // let posts:string[] = []
   
    

   useEffect(()=>{
    fetch("http://localhost:8000/getAllPosts",{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(res=>{return res.json()})
    .then(data=>{
        setPosts(data)
    })
    },[])
     

 




    let mapPosts:JSX.Element[] = posts.map((e,i)=>{
        return(
        <>
        <div className="postContainer" key={i}>
        <p className="name">{e.name}</p>
        <p className="message">{e.text_content}</p>
        </div>
        
        </>
        )
        
    })
    

    return(
        <>
        <div id="EverythingContainer">
            Leave a message!
            <div id="iconsContainer">
                <Options />
            </div>
            <div id="commentsContainer">
                {mapPosts}


            </div>

        </div>
        </>
    )
}

export default EverythingContainer