import { Departamento } from "./Departamento";
import { Trabajador } from "./Trabajador";

export class Director extends Trabajador {

    private antiguedad: number;

    constructor(nombre: string = "", mail: string = "", telefono: number = 0, identificador: string = "", horasExtra: number = 0, departamento: Departamento = new Departamento("", ""), antiguedad: number = 0) {
        super(nombre, mail, telefono, identificador, horasExtra, departamento);
        this.antiguedad = antiguedad;
    }

    // Métodos
    public calcularSueldoBase(sueldoBaseMaximo: number): number {
        let sueldoBase = sueldoBaseMaximo;
        const plusAntiguedad = this.antiguedad * 45;
        sueldoBase += plusAntiguedad;

        return sueldoBase;
    }

    // Getters y setters
    public getAntiguedad(): number {
        return this.antiguedad;
    }

    public setAntiguedad(antiguedad: number): void {
        this.antiguedad = antiguedad;
    }

    public toString(): string {
        return `Antigüedad: ${this.antiguedad}`;
    }
}