import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectoresUbi } from '../ServicioAlertasRecolectoresUbi.service';
import { ServicioInfoRecolectores } from '../ServicioInfoRecolectores.service';

@Component({
  selector: 'app-elimina-ubicacion-recolectores',
  templateUrl: './elimina-ubicacion-recolectores.component.html',
  styleUrls: ['./elimina-ubicacion-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresUbi, ServicioInfoRecolectores, Modales]
})
export class EliminaUbicacionRecolectoresComponent {

  constructor(private router:Router,
    private servicioAlertas:ServicioAlertasRecolectoresUbi,
    private servicioInfo:ServicioInfoRecolectores,
    private modal:Modales) {
  }
 atrPagina(): void{
   this.modal.disp(); 
   this.router.navigateByUrl('detalle-recolectores');
 }
 adelPagina(): void{
   this.modal.disp();
   this.servicioInfo.eliminaUbi(); 
   this.servicioAlertas.boolEliminaSet = true;
   this.router.navigateByUrl('detalle-recolectores');
 }


}
