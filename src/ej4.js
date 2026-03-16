import fs from 'fs';
const ARCHIVO_ENTRADA = "./src/archivo-entrada.txt";
const ARCHIVO_SALIDA = "./src/archivo-salida.txt";
console.clear();

copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);


function copiar(origen, destino)
{
const contenido = fs.readFileSync(origen, 'utf-8');//leo el archivo de origen
console.log("Ya leí el archivo. El contenido es:", contenido);
    
fs.appendFileSync(destino, contenido + '\n');// agrego el contenido de origen a destino
const contenido2 = fs.readFileSync(destino, 'utf-8');// leo todo lo que tiene destino 
console.log("Ya leí el archivo de nuevo. El contenido es:", contenido2);
    
}
