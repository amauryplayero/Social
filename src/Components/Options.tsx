import {useState} from 'react'
import Drawing from './Drawing'
import Text from './Text'
import Image from './Image'
import { State } from 'aws-sdk/clients/directconnect'
import Gif from './Gif'


interface Iprop {
    getAllPostsApiCall?:Function,
}



const Options: React.FC<Iprop> = (props:Iprop): JSX.Element => {

  


    const [option, setOption] = useState("menu")
    let currentActionDisplayed

    const handleOption = (e:React.MouseEvent<HTMLButtonElement>):void =>{
        let chosenOption = e.target as HTMLButtonElement 
        setOption(chosenOption.id)
        console.log(chosenOption.id)
    }

    const cancelButtonHandler = ():void =>{
        setOption("menu")
    }

    const cancelButton:JSX.Element = <button id="menu" onClick={(event)=>handleOption(event)}>cancel</button>

    switch ( option ) {
        case "menu":
            currentActionDisplayed = 
            <>
            <div id="actionButtonsContainer">
                <button className="actionButton" id="Drawing" onClick={(event)=>handleOption(event)}>draw</button>
                <button className="actionButton" id="Text" onClick={(event)=>handleOption(event)}>text</button>
                <button className="actionButton" id="Image" onClick={(event)=>handleOption(event)}>image</button>
                <button className="actionButton" id="Gif" onClick={(event)=>handleOption(event)}>gif</button>
            </div>
            
            </>
            break;

        case "Drawing":
            currentActionDisplayed = 
            <>
            <Drawing />
            {cancelButton}
            </>
            break;

        case "Text":
            currentActionDisplayed = 
            <>
            <div id="textOptionsContainer">
            <Text getAllPostsApiCall={props.getAllPostsApiCall}
                  cancelButtonHandler={cancelButtonHandler}/>
            {/* {cancelButton} */}
            </div>
           
            </>
            break;

        case "Image":
            currentActionDisplayed = 
            <>
            <Image />
            {cancelButton}
            </>
            break;
        case "Gif":
            currentActionDisplayed = 
            <>
            <Gif />
            {cancelButton}
            </>

    }


    return (
    <>
    {currentActionDisplayed}
    
    </>
    )
}

export default Options