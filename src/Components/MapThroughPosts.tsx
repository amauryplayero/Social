import React, {useRef, useState} from "react"
import {IData} from "./EverythingContainer"
import axios from 'axios'

interface IProps {
    element: {
        image_uuid: string,
        name:string,
        text_content:string,
        type: string,
    }
}

const url = "https://server-for-social.onrender.com"
const devUrl = "http://localhost:8001"

const MapThroughPosts = (props:IProps):JSX.Element=>{
    let imgBlob = useRef<any>()
    let urlBlobForImg:string

    const element = props.element!
    

    let body = {
                uuid: element.image_uuid
                }
    
    const srcUrl = axios.get(`${devUrl}/getImageFromS3`, { params: body })
            .then(res => {
                const arrayBufferView = new Uint8Array(res.data.Body.data)
                console.log(res.data.Body.data)
                return 'hai'
            })

    srcUrl.then()

    return (
        <>
        <>
                   <div className="postContainer">
                      <div id="nameSaysContainer">
                        {`${imgBlob}`}
                    <img src={`data:image/png;base64,${srcUrl}`}></img>
                    </div>
                     <p className="message">{'hai testing'}</p>

                    </div>
             </>
        </>
    )
}

export default MapThroughPosts