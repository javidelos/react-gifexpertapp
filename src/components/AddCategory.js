import React, {useState} from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        //setCategories([...categories, inputValue]); Podríamos importar categories y hacer esto. Pero con función callback no hace falta.

        //Esto es simplemente una validación
        if(inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]); //Función callback
            setInputValue('');  
        }
        

    }



    return (
        <form onSubmit={handleSubmit}>  
            <input 
                type="text"
                value = {inputValue}
                onChange = {handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
