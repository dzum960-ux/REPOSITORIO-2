//aqui no hay nada 
const nombre


abstract class VideoJuego {
    protected titulo: string;
    protected desarrollador: string;
    protected añoLanzamiento: number;

    constructor(titulo: string, desarrollador: string, anioLanzamiento: number) {
        this.titulo = titulo;
        this.desarrollador = desarrollador;
        this.añoLanzamiento = anioLanzamiento;
    }

    
    abstract IniciarJuego(): void;

    
    MostrarInfo(): void {
        console.log(`--- Información del Juego ---`);
        console.log(`Título: ${this.titulo}`);
        console.log(`Desarrollador: ${this.desarrollador}`);
        console.log(`Lanzamiento: ${this.añoLanzamiento}`);
    }

    getTitulo(): string {
        return this.titulo;
    }
}