/*
 Ejercicio #4
 Crea una clase llamada Cuenta en typescript y que tengas los atributos: nombre, cantidad, tipo de cuenta y número de cuenta. Métodos: Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta. Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada. Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta. Nota: Para el método retirar debe validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta. Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta. Define un objeto de la clase Cuenta y llama sus métodos
*/
var Cuenta = /** @class */ (function () {
    // Constructor que recibe los parámetros
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    // Método para depositar el dinero, la cantidad debe ser > $5.00
    Cuenta.prototype.depositar = function (cantidad) {
        if (cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += cantidad;
            console.log("Se ha depositado correctamente: $".concat(cantidad, ". Nueva cantidad: $").concat(this.cantidad));
        }
    };
    // Método para retirar dinero
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad <= 0) {
            console.log("No hay nada en la cuenta para retirar.");
        }
        else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else if (valor > this.cantidad) {
            console.log("No se puede retirar más de la cantidad disponible.");
        }
        else {
            this.cantidad -= valor;
            console.log("Se ha retirado: $".concat(valor, ". Cantidad restante: $").concat(this.cantidad));
        }
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de cuenta: ".concat(this.numeroCuenta));
        console.log("Cantidad actual: $".concat(this.cantidad));
    };
    return Cuenta;
}());
// Prueba de la clase
var cuenta = new Cuenta('Rafael Cabecera', 100, 'Ahorros', '1234567890');
cuenta.mostrarDatos();
cuenta.depositar(10); // Depositar un monto válido
cuenta.retirar(30); // Retirar un monto válido
cuenta.retirar(5); // Intentar retirar un monto válido
cuenta.retirar(80); // Intentar retirar más de lo que hay en la cuenta
cuenta.retirar(3); // Intentar retirar un monto menor a $5
cuenta.depositar(3); // Intentar depositar un monto menor a $5
cuenta.mostrarDatos(); // Mostrar los datos después de las operaciones
