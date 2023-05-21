import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ComidasComponent } from './modules/comidas/comidas.component';
import { ReceitaComponent } from './modules/receita/receita.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ErroComponent } from './components/erro/erro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComidasComponent,
    ReceitaComponent,
    NavbarComponent,
    ErroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
