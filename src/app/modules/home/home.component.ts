import { HomeService } from './home.service';
import { Component, Input, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  categorias : Categoria[] = []
  categoriaArmazenadas : Categoria[] = [];
  mensagem : string = ""


  constructor(private HomeService : HomeService){}

  ngOnInit(): void {
    this.listarCategorias()
  }

  listarCategorias(){
    this.HomeService.getCategorias().subscribe(
      data => {
        this.categorias = data;
        this.categoriaArmazenadas = this.categorias
      },
      error => {
        this.mensagem = error.message;
      }
    )
  }

  recuperaEvento(evento: Event): void {
    const target = evento.target as HTMLInputElement
    const value = target.value

    if (value) {
    this.categorias = this.categoriaArmazenadas.filter((categoria) =>
      categoria.strCategory.toLowerCase().includes(value)
    )
    } else {
    this.categorias = [...this.categoriaArmazenadas]
    }
  }
}
