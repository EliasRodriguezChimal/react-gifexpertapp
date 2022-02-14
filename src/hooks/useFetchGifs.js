import { useEffect, useState } from 'react'; 
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //NOTA: Los effect no pueden ser async.
    useEffect(() => {
        //El codigo dentro del useEffect() solo se ejecutara en caso de que el
        //argumento pasado como segundo parametro cambie, es decir, cada vez que
        //la categoria cambie, que sera cuando se ingrese un nuevo valor de busqueda
        //en el input
            getGifs(category)   //Esta linea de codigo se encarga de realizar la
                                //peticion http
                .then(imgs => { //El then se ejecuta en caso de haber obtenido los gifs
                    setState({  //setState se encarga de cambiar la informacion y
                                //dispara la renderizacion para que aparezcan los
                                //nuevos gifs.
                        data: imgs,
                        loading: false
                    });
                });
        }, [category]);

    return state;
}
