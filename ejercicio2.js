/*
 Ejercicio #2
 Crear una clase Calculadora en typescript que contenga los métodos: Sumar, Restar, Multiplicar, Dividir, Potencia y factorial
*/
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    // Método para sumar dos números
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    // Método para restar dos números
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    // Método para multiplicar dos números
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    // Método para dividir dos números
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero."); //Mensaje de error si el divisor es CERO
        }
        return a / b;
    };
    // Método para calcular la potencia
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    // Método para calcular el factorial de un número
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
// Prueba de la clase
var calculadora = new Calculadora();
console.log("Suma: ".concat(calculadora.sumar(5, 3))); // 8
console.log("Resta: ".concat(calculadora.restar(5, 3))); // 2
console.log("Multiplicaci\u00F3n: ".concat(calculadora.multiplicar(5, 3))); // 15
console.log("Divisi\u00F3n: ".concat(calculadora.dividir(6, 3))); // 2
console.log("Potencia: ".concat(calculadora.potencia(2, 3))); // 8
console.log("Factorial: ".concat(calculadora.factorial(5))); // 120
