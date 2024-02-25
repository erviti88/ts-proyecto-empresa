import { Departamento } from "./Departamento";
import { Trabajador } from "./Trabajador";

export class Gestor extends Trabajador {

    private especialidad: string;

    constructor(nombre: string = "", mail: string = "", telefono: number = 0, identificador: string, horasExtra: number = 0, departamento: Departamento = new Departamento("", ""), especialidad: string = "") {
        super(nombre, mail, telefono, identificador, horasExtra, departamento);
        this.especialidad = especialidad;
    }

    // Métodos
    public calcularSueldoBase(sueldoBaseMaximo: number): number {
        return sueldoBaseMaximo * 0.7;
    }

    // Getters y setters
    public get(): string {
        return this.especialidad;
    }

    public set(especialidad: string): void {
        this.especialidad = especialidad;
    }

    public toString(): string {
        return `Especialidad: ${this.especialidad}`;
    }
}