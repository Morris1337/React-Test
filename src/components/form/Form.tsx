import React, {useState} from "react";
import style from './form.module.css'

const InputSting = () =>{
    const[inputValue, setInputValue] = useState('');
    const[message, setMessage] = useState<string|null>("");

    const handlerChangeInput = (event) =>{
        if(message){
            setMessage(null)
        }
        setInputValue(event.target.value)
    }

    const handlerKeyPress = (event) =>{
        const { key } = event
        if (key === "Enter"){
            setMessage(inputValue)
            setInputValue("")
        }
    }
    return(
        <div>
        <input 
            placeholder={'enter text here'}
            className={style.Input}
            value={inputValue}
            onChange={handlerChangeInput}
            onKeyDown={handlerKeyPress} 
        />
        <div>
            {
                message ? (<div>{`Вы послали вселенной: ${message}`}</div>) :
                inputValue ?
                    (<div>Идет набор текста....</div>) : null
            }
        </div>
        </div>
    )
}

export default InputSting