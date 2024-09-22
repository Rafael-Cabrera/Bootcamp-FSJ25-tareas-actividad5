/*
 Ejercicio #5
 Crear una clase abstracta en typescript llamada Persona y va contener los Atributos: nombre, apellido, dirección, eléfono y edad. Métodos: Crear un método constructor para recibir los datos. Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no. Crea un método para mostrar todos los datos personales (será el método abstracto). Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo. En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo. La clase Empleado va heredar de la clase Persona. Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
*/

// Clase abstracta Persona
abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    // Constructor para recibir los datos
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    // Método para verificar si es mayor de edad
    public esMayorDeEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} no es mayor de edad.`);
        }
    }

    // Método abstracto para mostrar los datos personales
    public abstract mostrarDatos(): void;
}

// Clase Empleado que extiende o hereda de Persona
class Empleado extends Persona {
    private sueldo: number;

    // Constructor que recibe los datos del empleado
    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = 0; // Inicializa el sueldo como 0
    }

    // Método para cargar sueldo
    public cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir sueldo
    public imprimirSueldo(): void {
        console.log(`Sueldo: ${this.sueldo}`);
    }

    // Implementación del método abstracto mostrarDatos
    public mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.esMayorDeEdad();
    }
}

// Ejemplo de uso
const empleado = new Empleado('Rafael', 'Cabrera', 'San Salvador, San Salvador Sur, San Marcos', '555-9356', 51);
empleado.cargarSueldo(2500);
empleado.mostrarDatos();
empleado.imprimirSueldo();
