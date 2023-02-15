import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  cursos$!: Observable<Curso[]>;

  constructor(
    private cursoService: CursoService
  ){}
  
  ngOnInit() {
    console.log("Paso 1");
    this.cursos$ = this.cursoService.obtenerObservable();
  }
}
