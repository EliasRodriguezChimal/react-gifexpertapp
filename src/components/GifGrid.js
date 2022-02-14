//API Key = z0jXxLh494ZEvCTscrolyZYVVkHStk71

import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    //El metodo useEffect() nos permitira renderizar la funcion getGifs() la primera vez
    //solamente aun si se presiona un boton que, por ejemplo, llame de nuevo a este componente,
    //para ello debe usarse el segundo argumento de la funcion, el cual sera un arreglo
    //vacio, como se puede ver en las lineas de abajo.
    // useEffect(() => {
    //     getGifs(category)
    //         .then(setImages);
            //Como se vio anteriormente, si el primer argumento pasado a la funcion es 
            //exactamente el que se recibio como primer argumento tambien en la
            //funcion de flecha, entonces puede escribirse como se observa en el then
            //escrito arriba, y haria exactamente lo mismo que la linea de codigo
            //escrita abajo como ejemplo.

            // .then(imgs => setImages(imgs))
    // }, [category]);

    //Se incluyo 'category' en el parametro de las dependencias del arreglo (en la
    //linea de arriba) debido a que React envia un warning en caso de no incluirse.
    //La inclusion de esta variable le permite a React determinar que, si 'category'
    //llegase a cambiar, efectue de nuevo el codigo para renderizar nuevamente.

    //Las siguientes lineas corresponden a nuestro custom Hook llamado useFetchGifs,
    //el cual reemplazara la funcionalidad del codigo comentado en la parte superior
    //que se encargaba de realizar la renderizacion de los gifs en pantalla

    const {data:images, loading} = useFetchGifs(category);
    //Para renombrar en la desestructuracion, se puede usar dos puntos despues de la 
    //propiedad a renombrar, seguido del nuevo nombre, como se puede ver arriba.

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {/* En caso de querer evitar el uso de un ternario ya que solo necesitamos
            la comprobacion de la primera condicion (si loading es true), podemos usar
            el operador de doble & que es un AND, el cual se traduciria del codigo como
            'Si loading es true, entonces haz lo que va despues de los &' y si no es true
            no hace nada*/}
            {loading && <p>Loading...</p>}

            <div className="card-grid">
                {
                    images.map(img =>
                        <GifGridItem 
                            key={img.id}
                            //Otra forma de enviar cada item de manera independiente sin
                            //hacer desestructuracion aqui o en el otro lado, es usar
                            //el operador Spread (los tres puntos), como se puede
                            //observar en la linea comentada abajo

                            {...img}

                            // img={img}
                        />
                    )
                }
            </div>
        </>
            
    )
}
