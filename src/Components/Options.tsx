import {useState} from 'react'
import Drawing from './Drawing'
import Text from './Text'
import Image from './Image'
import Gif from './Gif'


interface Iprop {
    updatePostsAfterUpload?:Function,
    isItLoading?:Function
}



const Options: React.FC<Iprop> = (props:Iprop): JSX.Element => {

  


    const [option, setOption] = useState("menu")
    let currentActionDisplayed

    const handleOption = (e:React.MouseEvent<HTMLButtonElement>):void =>{
        let chosenOption = e.target as HTMLButtonElement 
        setOption(chosenOption.id)
   
    }

    const cancelButtonHandler = ():void =>{
        setOption("menu")
    }

    const cancelButton:JSX.Element = <button id="menu" onClick={(event)=>handleOption(event)}>cancel</button>

    switch ( option ) {
        case "menu":
            currentActionDisplayed = 
            <>
            <nav id="actionButtonsContainer">
                <button className="actionButton" id="Text" onClick={(event)=>handleOption(event)}></button>
                <button className="actionButton" id="Image" onClick={(event)=>handleOption(event)}></button>
                <button className="actionButton" id="Drawing" onClick={(event)=>handleOption(event)}></button>
                <button className="actionButton" id="Gif" onClick={(event)=>handleOption(event)}>gif</button>
            </nav>
            
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
            <Text updatePostsAfterUpload={props.updatePostsAfterUpload}
                  cancelButtonHandler={cancelButtonHandler}
                  isItLoading={props.isItLoading}/>
            {/* {cancelButton} */}
            </div>
           
            </>
            break;

        case "Image":
            currentActionDisplayed = 
            <>
            
            <Image updatePostsAfterUpload={props.updatePostsAfterUpload}
                    cancelButtonHandler={cancelButtonHandler}
                    isItLoading={props.isItLoading}/>

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