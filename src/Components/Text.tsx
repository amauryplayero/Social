import {useState} from 'react'
import axios from 'axios'


interface Iprop {
    getAllPostsApiCall?:Function,
    cancelButtonHandler?:Function
    
}

// interface IpropInOptions {
// }

const Text: React.FC<Iprop> = (props: Iprop): JSX.Element => {
    const [inputText, setInputText] = useState<String>("")
    const [name, setName] = useState<String>("")
    const [input, setInput] = useState<{}>({input:'',name:""})
    const [postState, setPostState] = useState<string>("editing")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        if(e.target.id === 'inputText'){
        let input = e.target.value 
        setInputText(input)
        } else {
        let nameInputted = e.target.value
        setName(nameInputted)
        }
    }

    const handleSubmit = (e:React.FormEvent):void =>{
        e.preventDefault()
        try{
           fetch('/postText', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify({text:inputText,name:name})
                    }
                ).then(res=>{setPostState("posted")}
            )
        }
        catch(err){

        }

    }

    if (postState === "posted") {
        props.getAllPostsApiCall?.()
        return(
        <>
        <div>
            "congrats!"
        </div>

        <button onClick={()=>{setPostState("editing");setInputText("");setName("")}}>
            post another message
        </button>

        

        </>)
    }



    
    return (
    <>
    <form id="formContainer" onSubmit={(e:React.FormEvent):void=>handleSubmit(e)}>
        <div id="nameInputContainer">
            <input id='nameInput' placeholder='name' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e)}}></input>
        </div>
  
        <div id="inputTextContainer">
            <input id="inputText" placeholder='write your message' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e)}}></input>
        </div>

        <div id="cancelAndPostButtonsContainer">
            <input type="submit" value="post" id="uploadTextButton"></input>
            <button onClick={()=>props.cancelButtonHandler?.()}>cancel</button>
        </div>

    </form>
    
    </>
    )
    
}

export default Text