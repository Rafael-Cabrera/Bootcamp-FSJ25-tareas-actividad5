/*
 Ejercicio #3
 Crea una clase llamada Canción que tenga los atributos: título, género de la canción y un atributo privado que se llame autor. Métodos: Crear un constructor que reciba como parámetros el título y género de la canción. Utiliza los métodos get y set para recibir e imprimir la propiedad autor. Crea un método para mostrar los datos de la canción.
*/
var Cancion = /** @class */ (function () {
    // Constructor que recibe el título y género de la canción
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = ''; // Inicializa el autor como una cadena vacía
    }
    //Se usa "public" para indicar más claramente los métodos públicos.
    // Método get para obtener el autor
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    // Método set para establecer el autor
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    // Método para mostrar los datos de la canción
    Cancion.prototype.mostrarDatos = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("G\u00E9nero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
// Prueba de la clase
var cancion = new Cancion('Bohemian Rhapsody', 'Rock');
cancion.setAutor('Queen');
cancion.mostrarDatos();
