import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models/courses';
import { CoursesService } from '../../services/courses.service';
import { from, Observable, of, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.css']
})
export class CoursesCardComponent implements OnInit {


  cursos!: any;
  curso! : Curso
  suscription! : Subscription

  constructor(
    private cursoService:CoursesService,
    private activatedRoute:ActivatedRoute
  )
    {
     
    }

ngOnInit(): void {
  

  this.suscription = this.cursoService.obtenerCursos().subscribe((cursosObservable:Curso[]) => {

    this.cursos = cursosObservable;
    console.log(this.cursos);})

  this.activatedRoute.params
  .subscribe( ({id})=> {
    this.curso = this.cursos.find((c : Curso)=> c.comision === id)
  })



  }
} 
