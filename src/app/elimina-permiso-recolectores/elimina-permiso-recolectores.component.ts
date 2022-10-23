import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectoresPermiso } from '../ServicioAlertasRecolectoresPermiso.service';
import { ServicioInfoRecolectores } from '../ServicioInfoRecolectores.service';

@Component({
  selector: 'app-elimina-permiso-recolectores',
  templateUrl: './elimina-permiso-recolectores.component.html',
  styleUrls: ['./elimina-permiso-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresPermiso, ServicioInfoRecolectores, Modales]
})
export class EliminaPermisoRecolectoresComponent{

  constructor(private router:Router, 
    private servicioAlertas:ServicioAlertasRecolectoresPermiso,
    private servicioInfo:ServicioInfoRecolectores,
    private modal:Modales) {}

 atrPagina(): void{
   this.modal.disp();
  //  this.router.navigateByUrl('detalle-recolectores');
 }
 adelPagina(): void{
   this.modal.disp();
   this.servicioInfo.eliminaPermiso();
   this.servicioAlertas.boolEliminaSet = true;
  //  this.router.navigateByUrl('detalle-recolectores');
 }


}
