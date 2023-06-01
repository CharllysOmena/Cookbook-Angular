import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Receita } from 'src/app/models/Receita';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService {

  constructor(private http : HttpClient) { }

  apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?s="

  getReceita(nome:string) : Observable<any>{
    return this.http.get(this.apiURL + nome).pipe(
      map(response => {
        if(response){
          return response
        }else{
          return response = []
        }
      }),
      catchError(error => {
        if(error.status === 404){
          console.log('Status code 404 : API não encontrada')
        }else if(error.status === 500) {
          console.error('Status code 500 : Error interno do servidor')
        }else {
          console.error('Erro desconhecido')
        }
        return throwError('Algo deu errado. por favor, tente novamente mais tarde')
      })
    )
  }


}
