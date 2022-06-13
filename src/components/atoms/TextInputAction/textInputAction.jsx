import { useState } from 'react';
import './textInputAction.css';

const TextInput = ({ readInput, placeholder = '', name, action }) => {
    const inputName = name.toLowerCase();
    const [input, setInput] = useState('');
    const handleInputChange = (e) => {
        setInput(e.target.value)
        readInput({
            name: e.target.name, 
            value: e.target.value
        });
    }

    const handleInputAction = () => {
        action();
        // wipe input value
    }

    return <div className="container">
        <label htmlFor={inputName}> { inputName[0].toUpperCase() + inputName.substring(1) } </label>
        <input type="text" name={inputName} value={input} onChange={handleInputChange} placeholder={placeholder}/>
        <button onClick={handleInputAction}> + </button>
    </div>
}

export default TextInput;