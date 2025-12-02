//clase3

abstract class Restaurante {
  nombre: string;
  direccion: string;
  capacidad: number;
  mesasOcupadas: number;

  constructor(nombre: string, direccion: string, capacidad: number) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.capacidad = capacidad;
    this.mesasOcupadas = 0;
  }

  abrirRestaurante(): void {
    console.log(${this.nombre} esta ahora abierto.);
  }

  ocuparMesa(): void {
    if (this.mesasOcupadas < this.capacidad) {
      this.mesasOcupadas++;
      console.log("Mesa ocupada. Mesas ocupadas:", this.mesasOcupadas);
    } else {
      console.log("No hay mesas disponibles.");
    }
  }
   liberarMesa(): void {
    if (this.mesasOcupadas > 0) {
      this.mesasOcupadas--;
      console.log("Mesa liberada. Mesas ocupadas:", this.mesasOcupadas);
    } else {
      console.log("No hay mesas que liberar.");
    }
  }
}