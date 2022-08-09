import { Component } from '@angular/core';
import {PaginatorModule} from 'primeng/paginator';

@Component({
  selector: 'app-listado-residuos',
  templateUrl: './listado-residuos.component.html',
  styleUrls: ['./listado-residuos.component.css']
})
export class ListadoResiduosComponent {
  // tabla = null;

  tabla = [
    ['Sólidos', 'Ganchos', '100.000001', '100.000001', 'No'],
    ['Sólidos', 'Ganchos', '100.000001', '100.000001', 'No'],
    ['Sólidos', 'Ganchos', '100.000001', '100.000001', 'No']
  ];

  constructor() { }

  

}
