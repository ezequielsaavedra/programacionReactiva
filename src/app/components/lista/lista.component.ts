import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs/internal/Subscription';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy{
  dataSource!: MatTableDataSource<Curso>
  columnas: string[] = ["nombre", "profesor", "comision", "fecha de inicio", "fecha de finalizacion", "inscripcion", "acciones"]
  suscripcion!: Subscription;

  constructor(
    private cursoService: CursoService
  ) {
  }

  ngOnInit(): void{
    this.dataSource = new MatTableDataSource<Curso>();
    this.suscripcion = this.cursoService.obtenerObservable().subscribe((cursos: Curso[]) => {
      this.dataSource.data = cursos;
    });
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
}
