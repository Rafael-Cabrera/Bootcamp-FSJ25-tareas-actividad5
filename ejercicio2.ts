/*
 Ejercicio #2
 Crear una clase Calculadora en typescript que contenga los métodos: Sumar, Restar, Multiplicar, Dividir, Potencia y factorial
*/
class Calculadora {
    // Método para sumar dos números
    sumar(a: number, b: number): number {
        return a + b;
    }

    // Método para restar dos números
    restar(a: number, b: number): number {
        return a - b;
    }

    // Método para multiplicar dos números
    multiplicar(a: number, b: number): number {
        return a * b;
    }

    // Método para dividir dos números
    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir entre cero.");//Mensaje de error si el divisor es CERO
        }
        return a / b;
    }

    // Método para calcular la potencia
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    // Método para calcular el factorial de un número
    factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos.");
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Prueba de la clase
const calculadora = new Calculadora();
console.log(`Suma: ${calculadora.sumar(5, 3)}`);             // 8
console.log(`Resta: ${calculadora.restar(5, 3)}`);           // 2
console.log(`Multiplicación: ${calculadora.multiplicar(5, 3)}`); // 15
console.log(`División: ${calculadora.dividir(6, 3)}`);       // 2
console.log(`Potencia: ${calculadora.potencia(2, 3)}`);      // 8
console.log(`Factorial: ${calculadora.factorial(5)}`);       // 120
