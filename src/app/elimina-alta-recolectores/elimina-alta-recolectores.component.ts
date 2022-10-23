import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectoresPermiso } from '../ServicioAlertasRecolectoresPermiso.service';
import { ServicioInfoAlta } from '../ServicioInfoAlta.service';

@Component({
  selector: 'app-elimina-alta-recolectores',
  templateUrl: './elimina-alta-recolectores.component.html',
  styleUrls: ['./elimina-alta-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresPermiso, ServicioInfoAlta, Modales]
})
export class EliminaAltaRecolectoresComponent{

  constructor(private router:Router, 
    private servicioAlertas:ServicioAlertasRecolectoresPermiso,
    private servicioInfo:ServicioInfoAlta,
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
