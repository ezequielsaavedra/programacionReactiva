import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {
      nombre: "Ingles",
      profesor: {
        nombre: "Marisa",
        apellido: "Gasparri",
        email: "mgasparri@gmail.com",
      },
      comision: 2045,
      estadoInscripcion: true,
      fechaInicio: new Date(2023, 2, 6),
      fechaFin: new Date(2023, 10, 22)
    },
    {
      nombre: "Japones",
      profesor: {
        nombre: "Nezuko",
        apellido: "Kamado",
        email: "nkamado@gmail.com",
      },
      comision: 2345,
      estadoInscripcion: false,
      fechaInicio: new Date(2023, 2, 7),
      fechaFin: new Date(2023, 10, 23)
    },
    {
      nombre: "Aleman",
      profesor: {
        nombre: "Erwin",
        apellido: "Smith",
        email: "esmith@gmail.com",
      },
      comision: 5365,
      estadoInscripcion: false,
      fechaInicio: new Date(2023, 2, 6),
      fechaFin: new Date(2023, 10, 22)
    },
    {
      nombre: "Italiano",
      profesor: {
        nombre: "Laureano",
        apellido: "Colombini",
        email: "lcolombini@gmail.com",
      },
      comision: 1679,
      estadoInscripcion: true,
      fechaInicio: new Date(2023, 2, 7),
      fechaFin: new Date(2023, 10, 23)
    },
  ];
  private cursos$!: BehaviorSubject<Curso[]>;
  
  constructor() { 
    this.obtenerCurso()
  }


  obtenerCurso(): Promise<BehaviorSubject<Curso[]>> {
    return new Promise((resolve, reject) => {
      if (this.cursos.length > 0) {
        resolve(this.cursos$ = new BehaviorSubject(this.cursos));
      } else {
        reject([]);
      }
    })
  }

  obtenerObservable(): Observable<Curso[]>{
    return this.cursos$.asObservable();
  }

}
