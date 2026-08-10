import { test } from 'node:test';
import assert from 'node:assert/strict';

import { sumar, restar } from '../src/models/matematica.js';


//SUMAR

//caso feliz
test('sumar 10 + 20 debe dar 30', () => {
    assert.equal(sumar(10, 20), 30);
});

//normal, que acepte el 0
test('sumar 0 + 5 debe dar 5', () => {
    assert.equal(sumar(0, 5), 5);
});

//sumar negativos
test('sumar números negativos', () => {
    assert.equal(sumar(-10, -5), -15);
});

//RESTAR

//resta comun 
test('restar 20 - 10 debe dar 10', () => {
    assert.equal(restar(20, 10), 10);
});

//
test('restar 10 - 20 debe dar -10', () => {
    assert.equal(restar(10, 20), -10);
});