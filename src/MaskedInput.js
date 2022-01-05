import React from 'react';
import Input from './components/input';
import InputMask from 'react-input-mask';


const onlyNumbers = (str) => str.replace(/^0-9/g, '')

const MaskedInput = ({ value, onChange, name, mask }) => {
        
function handleChange(event) {
    console.log(({...event.target}).name)

    onChange({
        ...event,
        target: {
            ...event.target,
            value: onlyNumbers(event.target.value)
    }
    }
)}

    return(
         <InputMask 
            name={name}
            mask={mask}
            value={value}
            onChange={onChange}
         />
    )
}

export default MaskedInput