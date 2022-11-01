import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ListadoResiduosComponent } from './listado-residuos/listado-residuos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { AltaResiduosComponent } from './alta-residuos/alta-residuos.component';
import { EditarResiduosComponent } from './editar-residuos/editar-residuos.component';
import { DetalleResiduosComponent } from './detalle-residuos/detalle-residuos.component';
import { ListadoRecolectoresComponent } from './listado-recolectores/listado-recolectores.component';
import { AltaRecolectores1Component } from './alta-recolectores1/alta-recolectores1.component';
import { AltaRecolectores2Component } from './alta-recolectores2/alta-recolectores2.component';
import { AltaRecolectores3Component } from './alta-recolectores3/alta-recolectores3.component';
import { AltaRecolectores4Component } from './alta-recolectores4/alta-recolectores4.component';
import { DetalleRecolectoresComponent } from './detalle-recolectores/detalle-recolectores.component';
import { EditarRecolectoresComponent } from './editar-recolectores/editar-recolectores.component';
import { EliminaRecolectoresComponent } from './elimina-recolectores/elimina-recolectores.component';
import { AltaResiduoRecolectoresComponent } from './alta-residuo-recolectores/alta-residuo-recolectores.component';
import { EliminaUbicacionRecolectoresComponent } from './elimina-ubicacion-recolectores/elimina-ubicacion-recolectores.component';
import { EliminaPermisoRecolectoresComponent } from './elimina-permiso-recolectores/elimina-permiso-recolectores.component';
import { EditaPermisoRecolectoresComponent } from './edita-permiso-recolectores/edita-permiso-recolectores.component';
import { AltaPermisoRecolectoresComponent } from './alta-permiso-recolectores/alta-permiso-recolectores.component';
import { EditaUbicacionRecolectoresComponent } from './edita-ubicacion-recolectores/edita-ubicacion-recolectores.component';
import { AltaUbicacionRecolectoresComponent } from './alta-ubicacion-recolectores/alta-ubicacion-recolectores.component';
import { EliminaRecolectorComponent } from './elimina-recolector/elimina-recolector.component';
import { EditaAltaRecolectoresComponent } from './edita-alta-recolectores/edita-alta-recolectores.component';
import { EliminaAltaRecolectoresComponent } from './elimina-alta-recolectores/elimina-alta-recolectores.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { SalirPerfilesComponent } from './salir-perfiles/salir-perfiles.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoResiduosComponent,
    AltaResiduosComponent,
    EditarResiduosComponent,
    DetalleResiduosComponent,
    ListadoRecolectoresComponent,
    AltaRecolectores1Component,
    AltaRecolectores2Component,
    AltaRecolectores3Component,
    AltaRecolectores4Component,
    DetalleRecolectoresComponent,
    EditarRecolectoresComponent,
    EliminaRecolectoresComponent,
    AltaResiduoRecolectoresComponent,
    EliminaUbicacionRecolectoresComponent,
    EliminaPermisoRecolectoresComponent,
    EditaPermisoRecolectoresComponent,
    AltaPermisoRecolectoresComponent,
    EditaUbicacionRecolectoresComponent,
    AltaUbicacionRecolectoresComponent,
    EliminaRecolectorComponent,
    EditaAltaRecolectoresComponent,
    EliminaAltaRecolectoresComponent,
    PerfilesComponent,
    SalirPerfilesComponent
  ],
  imports: [
    MatDatepickerModule,
    FontAwesomeModule,
    MatNativeDateModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    PaginatorModule,
    TableModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
