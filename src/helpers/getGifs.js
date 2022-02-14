export const getGifs = async(category) => {
    //NOTA: El uso de backticks (` `) en vez de comillas simples (' ') nos permite
    //el uso de variables de JavaScript dentro de la string, como se puede observar 
    //abajo con la variable category

    //NOTA 2: El uso de encodeURI() nos permite eliminar espacios y otras cosas para 
    //permitir una peticion correcta y que no arroje errores ya que reemplaza los
    //espacios y mas. Es una funcion de Javascript como tal 
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=z0jXxLh494ZEvCTscrolyZYVVkHStk71`
    const resp = await fetch(url);  //El await dentro de un async sirve para decirle 
    //al codigo que "espere" hasta recibir una respuesta del fetch y despues continue,
    //ya que en caso de no usarse un await, el codigo continuara independientemente de
    //si recibio dicha respuesta o no.
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    })
    
    //Este return no regresa un arreglo con los gifs, ya que es un metodo async, por
    //lo tanto, retorna una PROMESA que resuelve la coleccion de las imagenes.
    return gifs;
}