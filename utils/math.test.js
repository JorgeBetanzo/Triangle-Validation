const {sum, tipoDeTriangulo} = require('./math');

test('Triangulo Equilátero', () => {
  expect(tipoDeTriangulo(1, 1, 1)).toBe("Equilatero");
});

test('Triangulo Isósceles', () => {
  expect(tipoDeTriangulo(2, 2, 3)).toBe("Isósceles");
});

test('Triangulo Escaleno', () => {
  expect(tipoDeTriangulo(2, 3, 4)).toBe("Escaleno");
});

test('Triangulo de un lado mayor a la suma de otros dos', () => {
  expect(tipoDeTriangulo(1, 2, 3)).toBe("Lados inválidos");
});

test('Lados de menor o igual a zero', () => {
  expect(tipoDeTriangulo(1, 2, -3)).toBe("Lados de menor o igual a zero");
});


