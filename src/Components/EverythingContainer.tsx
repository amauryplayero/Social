import React, { ReactNode, useEffect } from 'react'
import {useState} from 'react'
import { setConstantValue } from 'typescript'
import Drawing from './Drawing'
import Options from './Options'



interface Iprop {
    getAllPostsApiCall?:Function
    updatePostsAfterUpload?:Function
}

const url = "https://server-for-social.onrender.com"
const devUrl = "http://localhost:8001"

const EverythingContainer: React.FC<Iprop> = ():JSX.Element =>{


    interface Data{
        name:string,
        text_content:string
     }
    const [posts, setPosts] = useState<Data[]>([])
    const [loading, setLoading] = useState<Boolean>(true)


   const getAllPostsApiCall = ():void | string=>{
            fetch(`${url}/getAllPosts`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
            .then(res=>{return res.json()})
            .then(data=>{
                setPosts(data)
                setLoading(false)
            })
    
    }
   

    const updatePostsAfterUpload = ():void =>{
        getAllPostsApiCall()
    }
    

   useEffect(()=>{
       getAllPostsApiCall()
    },[])
     

    let mapPosts:JSX.Element[] | JSX.Element
    if(loading===true){
        mapPosts = <>
        <div id="loadingGifContainer">
            <img id="loadingGif"src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
        </div>
        </>

    }else{
        mapPosts = posts.map((e,i)=>{
            return(
            <>
            <div className="postContainer">
                <div id="nameSaysContainer">
                    <p className="name">{e.name}</p>
                    <p className="says">said</p>
                </div>
            <p className="message">{e.text_content}</p>
            
            </div>
            </>
            )
            
        })
    }




    

    return(
        <>
        <div id="EverythingContainer">
            Leave a message!
            <div id="iconsContainer">
                <Options updatePostsAfterUpload={updatePostsAfterUpload}/>
            </div>
            <div id="commentsContainer">
                {mapPosts}
            </div>

        </div>
        </>
    )
}

export default EverythingContainer