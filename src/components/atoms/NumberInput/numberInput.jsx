import { useState } from 'react';
import './numberInput.css';

const NumberInput = ({ readInput, name }) => {
    const inputName = name.toLowerCase();
    const [input, setInput] = useState(0);
    const handleInputChange = (e) => {
        setInput(e.target.value)
        readInput({
            name: e.target.name, 
            value: Number(e.target.value)
        });
    }

    return <div>
        <label htmlFor={inputName}> { inputName[0].toUpperCase() + inputName.substring(1) } </label>
        <input type="number" name={name} value={input} onChange={handleInputChange}/>
    </div>
}

export default NumberInput;