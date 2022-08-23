import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle-residuos',
  templateUrl: './detalle-residuos.component.html',
  styleUrls: ['./detalle-residuos.component.css']
})
export class DetalleResiduosComponent {

  tabla = [
    {
      accion:'Generó', 
      nombre:'MeztliXochitli Niño de León', 
      numero:'000001', fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Editó', 
      nombre:'MeztliXochitli Niño de León', 
      numero:'000001', fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Activó', 
      nombre:'MeztliXochitli Niño de León', 
      numero:'000001', fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Activó', 
      nombre:'MeztliXochitli Niño de León', 
      numero:'000001', fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Desactivó', 
      nombre:'MeztliXochitli Niño de León', 
      numero:'000001', fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Activó', 
      nombre:'MeztliXochitli Niño de León', 
      numero:'000001', fecha:'23/03/2022', 
      hora:'01:11'
    }
    
  ];
  constructor() { }

  getObjeto(i:number) {
    var s = this.tabla[i].accion;
    switch (s) {
      case "Generó":
        s = 'genero'
        break;
      case "Editó":
        s = 'edito'
        break;
      case "Activó":
        s = 'activo'
        break;
      case "Desactivó":
        s = 'desactivo'
        break;
      default:
        break;
    }
    return s;

  }

  

}
