import axios from 'axios'
import React, { ReactNode, useEffect } from 'react'
import {useState, useRef} from 'react'
import { idText, setConstantValue } from 'typescript'
import Drawing from './Drawing'
import Options from './Options'
import MapThroughPosts from './MapThroughPosts'
import e from 'express'

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
    const [loading, setLoading] = useState<Boolean | string>(true)

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
   
    }

    const isItLoading = (boolean: boolean):void =>{
        setLoading(boolean)
    }

    const showLongWaitMessage = ():void =>{
   
       setTimeout(()=>{
            setLoading('longWait')
        }, 4000)

        setTimeout(()=>{
        setLoading('longerWait')
        }, 12000)
    
        
    }
   

    const updatePostsAfterUpload = ():void =>{
        getAllPostsApiCall()

    }//
    // console.log(loading)

   useEffect(()=>{
        getAllPostsApiCall()
        // showLongWaitMessage()
        
    },[])

    let mapPosts:(JSX.Element | undefined)[] | JSX.Element

    switch ( loading ) {
        case true:
            mapPosts = <>
            <div id="loadingGifContainer">
                <img id="loadingGif"src={`https://i.stack.imgur.com/kOnzy.gif`}></img>
            </div>
            </>
        break;

        case 'longWait':
            mapPosts = <>
            <div className="longWaitContainer">
            <p>this is taking a little longer than usual because the database
                server is trying to wake up! Please be patient.</p>
            
            </div>
             <div id="loadingGifContainer">
                <img id="loadingGif"src={`https://i.stack.imgur.com/kOnzy.gif`}></img>
            </div>
            </>
        break;

        case 'longerWait':
            mapPosts = <>
            <div className="longWaitContainer">
            <p>Server wake up!! I don't like this! Server wake uuupp!</p>
                <div id="gifElementContainer">
                    <img width="200px" src={`https://c.tenor.com/43IYTEPB9JQAAAAC/crissy-stranger-things-season4.gif`}></img>
                </div>
            </div>
            <div id="loadingGifContainer">
                <img id="loadingGif"src={`https://i.stack.imgur.com/kOnzy.gif`}></img>
            </div>
            </>
        break;


        case false:
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
                                            <img id="individualImage" src={`${e.image_s3_url}`}></img>
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
            break;

    }


    return(
        <>
        <div id="EverythingContainer">
            <span id="leaveAMessageText">Leave a message!</span>
            <div id="iconsContainer">
                <Options updatePostsAfterUpload={updatePostsAfterUpload}
                        isItLoading={isItLoading}/>
            </div>
            <div id="commentsContainer">
                {mapPosts!}
            </div>

        </div>
        </>
    )
}

export {EverythingContainer}