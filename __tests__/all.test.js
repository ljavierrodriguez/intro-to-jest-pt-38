const fs = require('fs');
const { sumar, restar } = require('../app');

test('El archivo app.js debe existir', () => {
    const filePath = 'app.js';
    expect(fs.existsSync(filePath)).toBe(true);
})

test('El archivo app2.js debe existir', () => {
    const filePath = 'app2.js';
    expect(fs.existsSync(filePath)).toBe(true);
})


describe('Validaciones de la funcion sumar', () => {
    test('La funcion sumar debe existir', () => {
        expect(sumar).toBeDefined()
    })
    
    test('La suma de 10 + 10 debe devolver 20', () => {
        expect(sumar(10, 10)).toBe(20);
    })
    
    test('La suma de 20 + 10 debe devolver 20', () => {
        expect(sumar(20, 10)).toBe(30);
    })
})





describe('Validaciones de la funcion restar', () => {
    test('La funcion restar debe existir', () => {
        expect(restar).toBeDefined()
    })
    
    test('La resta de 20 - 10 debe devolver 10', () => {
        expect(restar(20, 10)).toBe(10);
    })
})


