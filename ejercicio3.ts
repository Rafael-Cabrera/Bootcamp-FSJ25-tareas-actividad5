/*
 Ejercicio #3
 Crea una clase llamada Canción que tenga los atributos: título, género de la canción y un atributo privado que se llame autor. Métodos: Crear un constructor que reciba como parámetros el título y género de la canción. Utiliza los métodos get y set para recibir e imprimir la propiedad autor. Crea un método para mostrar los datos de la canción.
*/
class Cancion {
    private autor: string; // Atributo privado
    public titulo: string;  // Atributo público
    public genero: string;  // Atributo público

    // Constructor que recibe el título y género de la canción
    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ''; // Inicializa el autor como una cadena vacía
    }

	//Se usa "public" para indicar más claramente los métodos públicos.
    // Método get para obtener el autor
    public getAutor(): string {
        return this.autor;
    }

    // Método set para establecer el autor
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // Método para mostrar los datos de la canción
    public mostrarDatos(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

// Prueba de la clase
const cancion = new Cancion('Bohemian Rhapsody', 'Rock');
cancion.setAutor('Queen');
cancion.mostrarDatos();
