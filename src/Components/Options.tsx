import {useState} from 'react'
import Drawing from './Drawing'
import Text from './Text'
import Image from './Image'


interface Iprop {
    getAllPostsApiCall?:Function
}

const Options: React.FC<Iprop> = (props:Iprop): JSX.Element => {

  


    const [option, setOption] = useState("menu")
    let currentActionDisplayed

    const handleOption = (e:React.MouseEvent<HTMLButtonElement>):void =>{
        let chosenOption = e.target as HTMLButtonElement 
        setOption(chosenOption.id)
        console.log(chosenOption.id)
    }

    switch ( option ) {
        case "menu":
            currentActionDisplayed = 
            <>
            <button id="Drawing" onClick={(event)=>handleOption(event)}>drawing</button>
            <button id="Text" onClick={(event)=>handleOption(event)}>text</button>
            <button id="Image" onClick={(event)=>handleOption(event)}>image</button>
            </>
            break;

        case "Drawing":
            currentActionDisplayed = 
            <>
            <Drawing />
            <button id="menu" onClick={(event)=>handleOption(event)}>cancel</button>
            </>
            break;

        case "Text":
            currentActionDisplayed = 
            <>
            <Text getAllPostsApiCall={props.getAllPostsApiCall}/>
            <button id="menu" onClick={(event)=>handleOption(event)}>cancel</button>
            </>
            break;

        case "Image":
            currentActionDisplayed = 
            <>
            <Image />
            <button id="menu" onClick={(event)=>handleOption(event)}>cancel</button>
            </>
            break;

    }


    return (
    <>
    {currentActionDisplayed}
    </>
    )
}

export default Options