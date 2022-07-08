import React from 'react'
import {useState} from 'react'
import Drawing from './Drawing'
import Options from './Options'

const EverythingContainer = ():JSX.Element =>{

   

    
    

  



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