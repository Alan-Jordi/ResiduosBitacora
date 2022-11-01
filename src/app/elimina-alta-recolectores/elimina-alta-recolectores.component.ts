import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';

@Component({
  selector: 'app-elimina-alta-recolectores',
  templateUrl: './elimina-alta-recolectores.component.html',
  styleUrls: ['./elimina-alta-recolectores.component.css'],
  providers: [Modales]
})
export class EliminaAltaRecolectoresComponent{

  constructor(private router:Router, 
    private modal:Modales) {}

 atrPagina(): void{
   this.modal.disp();
  //  this.router.navigateByUrl('detalle-recolectores');
 }
 adelPagina(): void{
   this.modal.disp();
  //  this.router.navigateByUrl('detalle-recolectores');
 }

}
