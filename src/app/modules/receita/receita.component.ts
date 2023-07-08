import { ActivatedRoute } from '@angular/router';
import { ReceitaService } from './receita.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.css']
})
export class ReceitaComponent implements OnInit{

  mensagem : string = ""
  receita : any
  embed : string = ""
  embedLink : string = ""

  constructor(private receitaService : ReceitaService , private route : ActivatedRoute, private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.getReceita()
  }

  getReceita(){
    const nome = String(this.route.snapshot.paramMap.get("nome"))
    this.receita = this.receitaService.getReceita(nome).subscribe(
      data => {
        this.receita = data.meals[0]
      },
      error => this.mensagem = error.message
    )
  }
}
