import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectoresDetalles } from '../ServicioAlertasRecolectoresDetalle.service';

@Component({
  selector: 'app-elimina-recolectores',
  templateUrl: './elimina-recolectores.component.html',
  styleUrls: ['./elimina-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresDetalles, Modales]
})
export class EliminaRecolectoresComponent {

  constructor(private router:Router, 
    private servicioAlertas:ServicioAlertasRecolectoresDetalles,
    private modal:Modales) {}
 atrPagina(): void{
  this.modal.disp(); 
  this.router.navigateByUrl('detalle-recolectores');
 }
 adelPagina(): void{
   this.modal.disp();
   this.servicioAlertas.boolEliminaSet = true;
   this.router.navigateByUrl('detalle-recolectores');
 }

}
