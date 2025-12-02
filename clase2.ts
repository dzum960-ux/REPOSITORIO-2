class postres {
    private nombre: string
    private precio: number
    private ingredientes: string[]
    private disponible: boolean
    constructor(nombre: string, precio: number, ingredientes: string[], disponible: boolean) {
        this.nombre = nombre
        this.precio = precio
        this.ingredientes = ingredientes
        this.disponible = disponible
    }
    getNombre(): string {
        return this.nombre
    }
    getPrecio(): number {
        return this.precio
    }
    getIngredientes(): string[] {
        return this.ingredientes
    }
    getDisponible(): boolean {
        return this.disponible
    }
}