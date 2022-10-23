import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRecolectores1Component } from './alta-recolectores1/alta-recolectores1.component';
import { AltaRecolectores2Component } from './alta-recolectores2/alta-recolectores2.component';
import { AltaRecolectores3Component } from './alta-recolectores3/alta-recolectores3.component';
import { AltaRecolectores4Component } from './alta-recolectores4/alta-recolectores4.component';
import { AltaResiduosComponent } from './alta-residuos/alta-residuos.component';
import { DetalleRecolectoresComponent } from './detalle-recolectores/detalle-recolectores.component';
import { DetalleResiduosComponent } from './detalle-residuos/detalle-residuos.component';
import { EditarResiduosComponent } from './editar-residuos/editar-residuos.component';
import { EditarRecolectoresComponent } from './editar-recolectores/editar-recolectores.component';
import { ListadoRecolectoresComponent } from './listado-recolectores/listado-recolectores.component';
import { ListadoResiduosComponent } from './listado-residuos/listado-residuos.component';
import { EliminaRecolectoresComponent } from './elimina-recolectores/elimina-recolectores.component';
import { AltaResiduoRecolectoresComponent } from './alta-residuo-recolectores/alta-residuo-recolectores.component';
import { EliminaUbicacionRecolectoresComponent } from './elimina-ubicacion-recolectores/elimina-ubicacion-recolectores.component';
import { EliminaPermisoRecolectoresComponent } from './elimina-permiso-recolectores/elimina-permiso-recolectores.component';
import { EditaPermisoRecolectoresComponent } from './edita-permiso-recolectores/edita-permiso-recolectores.component';
import { AltaPermisoRecolectoresComponent } from './alta-permiso-recolectores/alta-permiso-recolectores.component';
import { EditaUbicacionRecolectoresComponent } from './edita-ubicacion-recolectores/edita-ubicacion-recolectores.component';
import { AltaUbicacionRecolectoresComponent } from './alta-ubicacion-recolectores/alta-ubicacion-recolectores.component';

const routes: Routes = [
  {path: 'listado-residuos', component: ListadoResiduosComponent},
  {path: 'alta-residuos', component: AltaResiduosComponent},
  {path: 'edita-residuos', component: EditarResiduosComponent},
  {path: 'detalle-residuos', component: DetalleResiduosComponent},
  {path: 'listado-recolectores', component: ListadoRecolectoresComponent},
  {path: 'alta-recolectores', component: AltaRecolectores1Component},
  {path: 'alta-recolectores2', component: AltaRecolectores2Component},
  {path: 'alta-recolectores3', component: AltaRecolectores3Component},
  {path: 'alta-recolectores4', component: AltaRecolectores4Component},
  {path: 'detalle-recolectores', component: DetalleRecolectoresComponent},
  {path: 'edita-recolectores', component: EditarRecolectoresComponent},
  {path: 'elimina-recolectores', component: EliminaRecolectoresComponent},
  {path: 'alta-residuo-recolectores', component:AltaResiduoRecolectoresComponent},
  {path: 'elimina-ubicacion-recolectores', component:EliminaUbicacionRecolectoresComponent},
  {path: 'elimina-permiso-recolectores', component:EliminaPermisoRecolectoresComponent},
  {path: 'edita-permiso-recolectores', component:EditaPermisoRecolectoresComponent},
  {path: 'alta-permiso-recolectores', component:AltaPermisoRecolectoresComponent},
  {path: 'edita-ubicacion-recolectores', component:EditaUbicacionRecolectoresComponent},
  {path: 'alta-ubicacion-recolectores', component:AltaUbicacionRecolectoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
