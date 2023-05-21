import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Comida } from 'src/app/models/Comida';

@Injectable({
  providedIn: 'root'
})
export class ComidasService {
  private apiURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c="

  constructor(private http : HttpClient) { }

  getComidas(tipo : string) : Observable<Comida[]> {
    return this.http.get<any>(this.apiURL+tipo).pipe(
      map(response => response.meals as Comida[]
      )
    )
  }
}
