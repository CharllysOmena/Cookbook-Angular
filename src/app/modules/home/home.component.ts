import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  categorias : Categoria[] = []
  mensagem : string = ""

  constructor(private HomeService : HomeService){}

  ngOnInit(): void {
    this.listarCategorias()
  }

  listarCategorias(){
    this.HomeService.getCategorias().subscribe(
      data => {
        this.categorias = data;
      },
      error => {
        this.mensagem = error.message;
      }
    )
  }
}
