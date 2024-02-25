export class Departamento {

    private nombre: string;
    private ubicacion: string;

    constructor(nombre: string = "", ubicacion: string = "") {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
    }

    // Getters y setters
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getMail(): string {
        return this.ubicacion;
    }

    public setMail(ubicacion: string): void {
        this.ubicacion = ubicacion;
    }

    public toString(): string {
        return `Nombre: ${this.nombre}, Ubicación: ${this.ubicacion}`;
    }
}