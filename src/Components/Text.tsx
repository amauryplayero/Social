import {useState} from 'react'


interface Iprop {
    updatePostsAfterUpload?:Function,
    cancelButtonHandler?:Function,
    isItLoading?:Function
}

// interface IpropInOptions {
// }

const url = "https://server-for-social.onrender.com"
const devUrl = "http://localhost:8001"

const Text: React.FC<Iprop> = (props: Iprop): JSX.Element => {
    const [inputText, setInputText] = useState<String>("")
    const [name, setName] = useState<String>("")
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
        setPostState("posted")
        props.isItLoading?.(true)
        e.preventDefault()
       
        
            try{
            fetch(`${url}/postText`, {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body:JSON.stringify({text:inputText,name:name})
                        }
                    ).then(res=>{ 
                        props.updatePostsAfterUpload?.()
                    }
                )
            }
            catch(err){

            }
        

    }
    // console.log(postState)
    if (postState === "posted") {
        return(
        <>
        <div>
            Message posted!
        </div>

        <button onClick={()=>{setPostState("editing");setInputText("");setName("")}}>
            post another message
        </button>
        <button onClick={()=>props.cancelButtonHandler?.()}>go back to options</button>

        

        </>)
    }



    
    return (
    <>
    <form id="formContainer" onSubmit={(e:React.FormEvent):void=>handleSubmit(e)}>
        <div id="nameInputContainer">
            <input id='nameInput' placeholder='name' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e)}} required></input>
        </div>
  
        <div id="inputTextContainer">
            <input id="inputText" placeholder='write your message' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e)}} required></input>
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