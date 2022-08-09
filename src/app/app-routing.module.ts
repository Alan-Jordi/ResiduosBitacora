import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaResiduosComponent } from './alta-residuos/alta-residuos.component';
import { ListadoResiduosComponent } from './listado-residuos/listado-residuos.component';

const routes: Routes = [
  {path: 'listado', component: ListadoResiduosComponent},
  {path: 'alta', component: AltaResiduosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
