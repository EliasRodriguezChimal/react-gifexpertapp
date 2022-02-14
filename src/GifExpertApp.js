import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => { 
    // const categories = ['Ichigo', 'Goku', 'Naruto'];
    const [categories, setCategories] = useState(['Ichigo']);

    const handleAdd = () => {  
        //  El operador Spread (los tres puntos que se ven en las dos lineas
        // de abajo) permite retornar los objetos del arreglo uno a uno, y ya
        // que la funcion setCategories() crea un nuevo estado del objeto,
        // si solo usamos agregamos un nuevo valor sin tomar en cuenta los 
        // anteriores (Ichigo, goku, etc), esto causara un error, ya que solo
        // quedaria un arreglo con el nuevo valor agregado y los otros se 
        // perderian. Por eso, el uso del operador Spread es importante para
        // agregar un nuevo valor con la funcion setCategories() y que funcione
        // correctamente. 

        
        //Soluciones viables para agregar un nuevo valor al arreglo:

        //  setCategories([...categories, 'Saitama']);
        // setCategories( categories => [...categories, 'Saitama']);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Es posible pasar propiedades como argumentos a los componentes
            tal como se ve en la linea de abajo. */}
            <AddCategory setCategories={setCategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => 
                        <GifGrid
                            key={category} 
                            category={category} 
                        />
                    )
                }
            </ol>
        </>
    )
}