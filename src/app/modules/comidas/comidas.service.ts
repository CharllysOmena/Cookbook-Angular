import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Comida } from 'src/app/models/Comida';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {
  private apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

  constructor(private http : HttpClient) { }

  getComidas(tipo : string) : Observable<Comida[]> {
    return this.http.get<any>(this.apiURL+tipo).pipe(
      map(response => {
        if(response.meals.length > 0){
          return response.meals
        }else{
          return []
        }
      }
      ),catchError(error =>{
        if (error.status === 404) {
          console.error('Status code 404 : API não encontrada.')
        } else if (error.status === 500) {
          console.error('Status code 500 : Erro interno do servidor.')
        } else {
          console.error('Erro desconhecido.')
        }
        return throwError('Algo deu errado. Por favor, tente novamente mais tarde.')
      })
    )
  }
}
