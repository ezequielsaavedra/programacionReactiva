import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  cursos$!: Observable<Curso[]>;
  formFilter!: FormGroup;
  controles: any = {
    nombre: new FormControl("")
  }

  constructor(
    private cursoService: CursoService
  ){
    
  }
  
  ngOnInit() {
    this.formFilter = new FormGroup(this.controles)
    this.cursos$ = this.cursoService.obtenerCursoFiltro(this.controles.nombre.value);
  }

  filtrar() {
    this.cursos$ = this.cursoService.obtenerCursoFiltro(this.controles.nombre.value);
  }
}
