import currencyMap from 'currency-map-country';

function obtenerMoneda(codigoPais) {
    try {
        const moneda = currencyMap.getCurrency(codigoPais);
        return moneda.name || null;
    } catch (error) {
        return null;
    }
}

let monedaDelPais, codigoPais;

codigoPais = 'ARS';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);