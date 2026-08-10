import { test } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';

test('integración EJ02 con módulo matematica', () => {
    const resultado = execFileSync(
        'node',
        ['src/ej2.js'],
        { encoding: 'utf8' }
    );

    assert.match(resultado, /sumar\(10, 20\) = 30/);
    assert.match(resultado, /restar\(10, 20\) = -10/);
    assert.match(resultado, /multiplicar\(10, 20\) = 200/);
    assert.match(resultado, /dividir\(10, 20\) = 0\.5/);
});

test('integración EJ07 con currency-map-country', () => {
    const resultado = execFileSync(
        'node',
        ['src/ej7.js'],
        { encoding: 'utf8' }
    );

    assert.match(
        resultado,
        /La moneda del país ARS es: Argentine Peso/
    );

    assert.match(
        resultado,
        /La moneda del país UZA es: null/
    );
});

test('EJ07 - mismo dato produce el mismo resultado', () => {
    const resultado1 = execFileSync(
        'node',
        ['src/ej7.js'],
        { encoding: 'utf8' }
    );

    const resultado2 = execFileSync(
        'node',
        ['src/ej7.js'],
        { encoding: 'utf8' }
    );

    assert.equal(resultado1, resultado2);
});