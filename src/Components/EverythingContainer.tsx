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
 }
const EverythingContainer: React.FC<Iprop> = ():JSX.Element =>{


    const [posts, setPosts] = useState<IData[]| undefined>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [imageSource, setImageSource ] = useState("")
   


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
    //  console.log(posts)
    
    let mapPosts:(JSX.Element | undefined)[] | JSX.Element
    if(loading===true){
        mapPosts = <>
        <div id="loadingGifContainer">
            <img id="loadingGif"src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"></img>
        </div>
        </>
    }else{
        console.log('hai')
        mapPosts = posts!.map((e, i) => {
            if (e.type === "image") {

                     let body = {
                    uuid: e.image_uuid
                    }
                axios.get(`${devUrl}/getImageFromS3`, { params: body })
                .then(res => {
                setImageSource(res.data)
                    
                    
                })

                console.log('data:image/jpg,'+imageSource)
                return(
                // <MapThroughPosts element={e}/>
                <>
                <>
                           <div className="postContainer">
                              <div id="nameSaysContainer">
                                {`hi`}
                            <img width="300px"src={`data:image/jpg,${imageSource}`}></img>
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
                {mapPosts}
            </div>

        </div>
        </>
    )
}

export {EverythingContainer}