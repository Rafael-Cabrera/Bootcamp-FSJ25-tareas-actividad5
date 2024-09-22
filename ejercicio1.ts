/*
EJERCICO #1
Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.
*/
class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'centrado' | 'derecha' | 'izquierda';

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
        this.alineacion = 'centrado'; // Alineación por defecto
    }

    // Método para obtener el título, color y fuente de la página
    obtenerEstilo(): { titulo: string; color: string; fuente: string } {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
        };
    }

    // Método para establecer la alineación del título
    establecerAlineacion(alineacion: 'centrado' | 'derecha' | 'izquierda'): void {
        this.alineacion = alineacion;
    }

    // Método para imprimir todas las propiedades
    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}

// Prueba de clase
const cabecera = new CabeceraPagina('Bienvenidos', 'azul', 'Arial');
cabecera.establecerAlineacion('izquierda');
cabecera.imprimirPropiedades();
