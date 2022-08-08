import axios from 'axios'
import React, { ReactNode, useEffect } from 'react'
import {useState, useRef} from 'react'
import { idText, setConstantValue } from 'typescript'
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
            fetch(`${url}/getAllPosts`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
            })
            .then(res=>{return res.json()})
            .then(data=>{
                setLoading(false)
                setPosts(data)
            })
    //
    }
   

    const updatePostsAfterUpload = ():void =>{
        getAllPostsApiCall()
    }//
    

   useEffect(()=>{
       getAllPostsApiCall()
    },[])

    let mapPosts:(JSX.Element | undefined)[] | JSX.Element
    if(loading===true){
        mapPosts = <>
        <div id="loadingGifContainer">
            <img id="loadingGif"src={`https://i.stack.imgur.com/kOnzy.gif`}></img>
        </div>
        </>
    }else {
        mapPosts = posts!.map((e, i) => {
            if (e.type === "image") {
                return(
                // <MapThroughPosts element={e}/>
                <>
                <>
                           <div className="postContainer">
                                <div id="imagePostContainer">
                                    <div id="nameContainerInImagePost">
                                        <p className="name">{e.name}</p>
                                        <p className="says">posted</p>

                                    </div>
                                        <p className="messageInImage">{e.text_content}</p>
                                        <img id="image" src={`${e.image_s3_url}`}></img>
                                </div>
                            </div>
                     </>
                </>
                )
            } else if(e.type === "text"){
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
            } else {

            }
    
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
                {mapPosts!}
            </div>

        </div>
        </>
    )
}

export {EverythingContainer}