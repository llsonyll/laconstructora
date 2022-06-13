import { useState } from 'react';
import './textInput.css';

const TextInput = ({ readInput, placeholder = '', name }) => {
    const inputName = name.toLowerCase();
    const [input, setInput] = useState('');
    const handleInputChange = (e) => {
        setInput(e.target.value)
        readInput({
            name: e.target.name, 
            value: e.target.value
        });
    }

    return <div>
        <label htmlFor={inputName}> { inputName[0].toUpperCase() + inputName.substring(1) } </label>
        <input type="text" name={inputName} value={input} onChange={handleInputChange} placeholder={placeholder}/>
    </div>
}

export default TextInput;