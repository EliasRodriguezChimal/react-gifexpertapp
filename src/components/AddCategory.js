import React, { useState } from 'react';
import PropTypes from 'prop-types';

//Para recibir como prop una funcion desde otro componente, no es necesario
//agregar los parentesis en la parte de props, se hace como aparece en la linea
//de abajo.
export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        //La siguiente linea previene el comportamiento por defecto del form
        //evitando asi que se recargue la pagina por completo al presionar enter.
        e.preventDefault();

        //La funcion trim() elimina los espacios en blanco previos y posteriores
        //al valor.
        if( inputValue.trim().length > 2){
            //Llamamos a la funcion que fue pasada como prop desde el componente
            //GifExpertApp para asi modificar el arreglo de categories
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('');
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
