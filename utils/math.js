function tipoDeTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return 'Lados de menor o igual a zero';
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return 'Lados inválidos';
    }

    if (a === b && b === c) {
        return 'Equilatero';
    } else if (a === b || a === c || b === c) {
        return 'Isósceles';
    } else {
        return 'Escaleno';
    }
}

function sum(a, b) {
    return a + b;
  }

  module.exports = {
    sum,
    tipoDeTriangulo
};