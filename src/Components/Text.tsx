import {useState} from 'react'
import axios from 'axios'

const Text = (): JSX.Element => {
    const [inputText, setInputText] = useState<String>("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void =>{
        let input = e.target.value
        setInputText(input)
    }

    const handleSubmit = (e:React.FormEvent):void =>{
        e.preventDefault()
        console.log('hai')
        try{
           fetch('http://localhost:8000/postTextToS3', {method: 'POST'}).then(res=>{
               console.log(res)
           })
        }
        catch(err){

        }

    }



    
    return (
    <>
    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{handleChange(e)}}></input>
    <form onSubmit={(e:React.FormEvent):void=>handleSubmit(e)}>
        <input type="submit" value="input"></input>
    </form>
    
    </>
    )
}

export default Text