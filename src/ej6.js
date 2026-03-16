import { URL } from 'url'

let miUrl = null;
let miObjeto = null;

miUrl = 'http://www.ort.edu.ar:808i0/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl);

console.log(miObjeto);


function parsearUrl(laURL){
    try {

        const urlObj = new URL(laURL);

        return {
            host: urlObj.origin,
            pathname: urlObj.pathname,
            parametros: urlObj.searchParams
        }

    } catch (error) {

        console.error("Error al parsear la URL:", error);

        return {
            host: null,
            pathname: null,
            parametros: null
        }

    }
}