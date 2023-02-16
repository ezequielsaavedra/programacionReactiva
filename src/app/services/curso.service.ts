import { Injectable } from '@angular/core';
import { filter, map, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [
    {
      nombre: "ingles",
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
      nombre: "japones",
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
      nombre: "aleman",
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
      nombre: "italiano",
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
  private cursosFilter$!: BehaviorSubject<Curso[]>;

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

  obtenerObservable(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }


  obtenerCursoFiltro(form: string): any {
    of(this.cursos).pipe(
      map((cursos: Curso[]) => {
        return cursos.filter((curso: Curso) => curso.nombre.includes( form.toLocaleLowerCase()))
      })
    ).subscribe((cursos) => {
      console.log(cursos)
      return (this.cursosFilter$ = new BehaviorSubject(cursos));
    })
    return this.cursosFilter$.asObservable();
  }
}
