import { Comida } from 'src/app/models/Comida';
import { ComidasService } from './comidas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit{
  comidas : Comida[] = []

  ngOnInit(): void {
    this.listarComidas()
  }

  constructor(private ComidasService : ComidasService, private route : ActivatedRoute){}

  listarComidas(){
    const tipo = String(this.route.snapshot.paramMap.get("tipo"));
    this.ComidasService.getComidas(tipo).subscribe(data => this.comidas = data)
  }

}
