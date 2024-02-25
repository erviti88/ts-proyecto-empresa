import { Departamento } from "./Departamento";
import { Trabajador } from "./Trabajador";

export class Programador extends Trabajador {

    private lenguaje: string;

    constructor(nombre: string = "", mail: string = "", telefono: number = 0, identificador: string, horasExtra: number = 0, departamento: Departamento = new Departamento("", ""), lenguaje: string = "") {
        super(nombre, mail, telefono, identificador, horasExtra, departamento);
        this.lenguaje = lenguaje;
    }

    // Métodos
    public calcularSueldoBase(sueldoBaseMaximo: number): number {
        return sueldoBaseMaximo * 0.4;
    }

    // Getters y setters
    public getLenguaje(): string {
        return this.lenguaje;
    }

    public setLenguaje(lenguaje: string): void {
        this.lenguaje = lenguaje;
    }

    public toString(): string {
        return `Lenguaje: ${this.lenguaje}`;
    }
}