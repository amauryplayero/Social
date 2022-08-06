import axios from 'axios'
import React, { ReactNode, useEffect } from 'react'
import {useState, useRef} from 'react'
import { setConstantValue } from 'typescript'
import Drawing from './Drawing'
import Options from './Options'
import MapThroughPosts from './MapThroughPosts'



interface Iprop {
    getAllPostsApiCall?:Function,
    updatePostsAfterUpload?:Function,
    element?: Object

}

const url = "https://server-for-social.onrender.com"
const devUrl = "http://localhost:8001"

export interface IData{
    image_uuid: string,
    name:string,
    text_content:string,
    type: string,
    image_s3_url:string,
 }
const EverythingContainer: React.FC<Iprop> = ():JSX.Element =>{


    const [posts, setPosts] = useState<IData[]| undefined>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [imageSource, setImageSource ] = useState()
   


   const getAllPostsApiCall = ():void | string=>{
            fetch(`${devUrl}/getAllPosts`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
            .then(res=>{return res.json()})
            .then(data=>{
                console.log(data)
                setPosts(data)
                setLoading(false)
            })
    //
    }
   

    const updatePostsAfterUpload = ():void =>{
        getAllPostsApiCall()
    }//
    

   useEffect(()=>{
       getAllPostsApiCall()
    },[])
    //  console.log(posts)
    
    let mapPosts:(JSX.Element | undefined)[] | JSX.Element
    if(loading===true){
        mapPosts = <>
        <div id="loadingGifContainer">
            <img id="loadingGif"src={`https://leaveamessagebucket.s3.amazonaws.com/6655f6f5-1567-42b8-b767-8dff3e84e754.jpeg`}></img>
        </div>
        </>
    }else {
        mapPosts = posts!.map((e, i) => {
            if (e.type === "image") {
                let body = {
                    uuid:e.image_uuid
                }
                // console.log(e)

                return(
                // <MapThroughPosts element={e}/>
                <>
                <>
                           <div className="postContainer">
                              <div id="nameSaysContainer">
                                {`hi`}
                            <img width="300px"src={e.image_s3_url}></img>
                            </div>
                             <p className="message">{'hai testing'}</p>
        
                            </div>
                     </>
                </>
                )
            } else {
                return (
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
            }
    
        })
        // mapPosts = mapThroughPosts(posts)
    }

    return(
        <>
        <div id="EverythingContainer">
            Leave a message!
            <div id="iconsContainer">
                <Options updatePostsAfterUpload={updatePostsAfterUpload}/>
            </div>
            <div id="commentsContainer">
                {mapPosts!}
            </div>

        </div>
        </>
    )
}

export {EverythingContainer}