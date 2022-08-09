import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoResiduosComponent } from './listado-residuos/listado-residuos.component';
import { AltaResiduosComponent } from './alta-residuos/alta-residuos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoResiduosComponent,
    AltaResiduosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
