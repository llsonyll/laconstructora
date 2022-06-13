import NumberInput from '../../atoms/NumberInput';
import TextInput from '../../atoms/TextInput';
// import TextInputAction from '../../atoms/TextInputAction/textInputAction';
import './inputBox.css'

const InputBox = ({type = 'text', inputHandler, name, placeholder}) => {
    switch (type) {
        case 'text':
            return <div className="boxWrapper">
                <TextInput readInput={  inputHandler } name={name} placeholder={placeholder} />    
            </div>
        case 'number':
            return <div className="boxWrapper">
                <NumberInput readInput={  inputHandler } name={name} />    
            </div>
        default:
            break;
    }
}

export default InputBox;