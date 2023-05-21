import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Categoria } from 'src/app/models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  apiURL = "https://www.themealdb.com/api/json/v1/1/categories.php"

  constructor(private http : HttpClient){}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<any>(this.apiURL).pipe(
      map(response => {
        if (response.categories && response.categories.length > 0) {
          return response.categories as Categoria[]
        } else {
          return response.categories = [] as Categoria[]
        }
      }),
      catchError(error => {
        if (error.status === 404) {
          console.error('Status code 404 : API não encontrada.')
        } else if (error.status === 500) {
          console.error('Status code 500 : Erro interno do servidor.')
        } else {
          console.error('Erro desconhecido.')
        }
        return throwError('Algo deu errado. Por favor, tente novamente mais tarde.')
      })
    );
  }

}
