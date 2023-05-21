import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ComidasComponent } from './modules/comidas/comidas.component';
import { ReceitaComponent } from './modules/receita/receita.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "comidas/:tipo", component: ComidasComponent},
  {path: "receita/:nome", component: ReceitaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
