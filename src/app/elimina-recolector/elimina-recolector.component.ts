import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectores } from '../ServicioAlertasRecolectores.service';

@Component({
  selector: 'app-elimina-recolector',
  templateUrl: './elimina-recolector.component.html',
  styleUrls: ['./elimina-recolector.component.css'],
  providers: [ServicioAlertasRecolectores, Modales]
})
export class EliminaRecolectorComponent {

  constructor(private router:Router, 
    private servicioAlertas:ServicioAlertasRecolectores,
    private modal:Modales) {}
 atrPagina(): void{
  this.modal.disp(); 
  this.router.navigateByUrl('detalle-recolectores');
 }
 adelPagina(): void{
   this.modal.disp();
   this.servicioAlertas.boolEliminaSet = true;
   this.router.navigateByUrl('listado-recolectores');
 }

}
