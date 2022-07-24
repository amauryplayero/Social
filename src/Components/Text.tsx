import {useState} from 'react'
import axios from 'axios'

const Text = (): JSX.Element => {
    const [inputText, setInputText] = useState<String>("")
    const [name, setName] = useState<String>("")
    const [input, setInput] = useState<{}>({input:'',name:""})

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
           fetch('http://localhost:8000/postText', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body:JSON.stringify({text:inputText,name:name})
                    }
                ).then(res=>{ console.log(res)}
            )
        }
        catch(err){

        }

    }



    
    return (
    <>
    <form onSubmit={(e:React.FormEvent):void=>handleSubmit(e)}>
    <input id="inputText" placeholder='write your message' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e)}}></input>
    <input id='name' placeholder='name' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e)}}></input>
        <input type="submit" value="post" id="uploadTextButton"></input>
    </form>
    
    </>
    )
    
}

export default Text