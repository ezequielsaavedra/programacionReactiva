import { Profesor } from "./profesor";

export interface Curso {
    nombre: string;
    profesor: Profesor;
    comision: number;
    estadoInscripcion: boolean;
    fechaInicio: Date;
    fechaFin: Date;
}