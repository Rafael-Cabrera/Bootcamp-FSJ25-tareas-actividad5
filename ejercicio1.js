/*
EJERCICO #1
Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.
*/
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'centrado'; // Alineación por defecto
    }
    // Método para obtener el título, color y fuente de la página
    CabeceraPagina.prototype.obtenerEstilo = function () {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    };
    // Método para establecer la alineación del título
    CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
        this.alineacion = alineacion;
    };
    // Método para imprimir todas las propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
// Prueba de clase
var cabecera = new CabeceraPagina('Bienvenidos', 'azul', 'Arial');
cabecera.establecerAlineacion('izquierda');
cabecera.imprimirPropiedades();
