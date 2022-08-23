import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoResiduosComponent } from './listado-residuos/listado-residuos.component';
import { AltaResiduosComponent } from './alta-residuos/alta-residuos.component';
import { PaginatorModule } from 'primeng/paginator';
import { EditarResiduosComponent } from './editar-residuos/editar-residuos.component';
import { DetalleResiduosComponent } from './detalle-residuos/detalle-residuos.component';
import { ListadoRecolectoresComponent } from './listado-recolectores/listado-recolectores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoResiduosComponent,
    AltaResiduosComponent,
    EditarResiduosComponent,
    DetalleResiduosComponent,
    ListadoRecolectoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
