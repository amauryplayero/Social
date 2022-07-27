import React, { ReactNode, useEffect } from 'react'
import {useState} from 'react'
import Drawing from './Drawing'
import Options from './Options'

interface Iprop {
    getAllPostsApiCall?:Function
}

const url = "https://server-for-social.onrender.com"
const EverythingContainer: React.FC<Iprop> = ():JSX.Element =>{


    interface Data{
        name:string,
        text_content:string
     }


    const [posts, setPosts] = useState<Data[]>([])
    const [loadingPosts, setLoadingPosts] = useState<Boolean>(true)
    // let posts:string[] = []

   const getAllPostsApiCall = ():void =>{
       setLoadingPosts(true)
        fetch(`${url}/getAllPosts`,{
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
        })
        .then(res=>{return res.json()})
        .then(data=>{
            setPosts(data)
            setLoadingPosts(false)
        })

    }
    
    

   useEffect(()=>{
       getAllPostsApiCall()
    
    },[])
     

    let mapPosts:JSX.Element[] | JSX.Element
    if(loadingPosts===true){
        mapPosts = <>
        <div id="loadingGifContainer">
            <img id="loadingGif"src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
        </div>
        </>

    }else{
        mapPosts = posts.map((e,i)=>{
            return(
            <>
            <div className="postContainer" key={i}>
                <div id="nameSaysContainer">
                    <p className="name">{e.name}</p>
                    <p className="says">said</p>
                </div>
            <p className="message">{e.text_content}</p>
            
            </div>
            </>
            )
            
        })
        mapPosts.reverse()

    }




    

    return(
        <>
        <div id="EverythingContainer">
            Leave a message!
            <div id="iconsContainer">
                <Options getAllPostsApiCall={getAllPostsApiCall}/>
            </div>
            <div id="commentsContainer">
                {mapPosts}
            </div>

        </div>
        </>
    )
}

export default EverythingContainer