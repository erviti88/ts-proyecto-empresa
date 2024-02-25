import { Departamento } from "./Departamento";

export abstract class Trabajador {
    
    private nombre: string;
    private mail: string;
    private telefono: number;
    private identificador: string;
    private horasExtra: number;
    private departamento: Departamento;

    constructor(nombre: string = "", mail: string = "", telefono: number = 0, identificador: string = "", horasExtra: number = 0, departamento: Departamento = new Departamento("", "")) {
        this.nombre = nombre;
        this.mail = mail;
        this.telefono = telefono;
        this.horasExtra = horasExtra;
        this.departamento = departamento;
        
        // Calcular el identificador
        const añoActual = new Date().getFullYear();
        const tresPrimerosCharsDepartamento = this.departamento.getNombre().substring(0, 3).toUpperCase();
        const tresPrimerosCharsNombre = this.nombre.split(' ').map(word => word.substring(0, 3)).join('').toUpperCase();
        this.identificador = `${añoActual}${tresPrimerosCharsDepartamento}${tresPrimerosCharsNombre}`;
    }

    // Métodos
    public abstract calcularSueldoBase(sueldoBaseMaximo: number): number;

    // Getters y setters
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getMail(): string {
        return this.mail;
    }

    public setMail(mail: string): void {
        this.mail = mail;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public setTelefono(telefono: number): void {
        this.telefono = telefono;
    }

    public getIdentificador(): string {
        return this.identificador;
    }

    public setIdentificador(identificador: string): void {
        this.identificador = identificador;
    }

    public getHorasExtra(): number {
        return this.horasExtra;
    }

    public setHorasExtra(horasExtra: number): void {
        this.horasExtra = horasExtra;
    }

    public getDepartamento(): Departamento {
        return this.departamento;
    }

    public setDepartamento(departamento: Departamento): void {
        this.departamento = departamento;
    }
    
    public toString(): string {
        return `Nombre: ${this.nombre}, Mail: ${this.mail}, Teléfono: ${this.telefono}, Identificador: ${this.identificador}, Horas Extra: ${this.horasExtra}, Departamento: ${this.departamento}`;
    }
}