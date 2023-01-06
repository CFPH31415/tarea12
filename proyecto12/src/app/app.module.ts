import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { CondicionalDirective } from './condicional.directive';
import { ComponentesComponent } from './componentes/componentes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    CondicionalDirective,
    ComponentesComponent,
    FormularioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
