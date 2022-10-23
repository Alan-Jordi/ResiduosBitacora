import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioDatos } from '../ServicioDatos.service';

@Component({
  selector: 'app-alta-recolectores1',
  templateUrl: './alta-recolectores1.component.html',
  styleUrls: ['./alta-recolectores1.component.css'],
  providers: [ServicioDatos]
})
export class AltaRecolectores1Component{

  public fecha = '';
  public capturador = '';
  public noCol = '';
  public bool = false;

  constructor(private router:Router, private servicioDatos:ServicioDatos) {
    this.fecha = this.date();
    servicioDatos.noColSet = '0000001';
    servicioDatos.capturadorSet = 'MeztliXochitli Niño de León';
    this.capturador = servicioDatos.capturadorGet;
    this.noCol = servicioDatos.noColGet;
    
   }
   listadoPagina(): void{
    this.router.navigateByUrl('listado-recolectores');
  }
  altaPagina2(): void{
    this.router.navigateByUrl('alta-recolectores2');
  }

   date(): string{
    var currentdate = new Date(); 
    var mes = currentdate.getMonth()+1;
    var mesS = '';
    var hora = currentdate.getHours();
    var horaS = '';
    var min = currentdate.getMinutes();
    var minS = '';
    var dia = currentdate.getDate();
    var diaS = '';
    if (mes < 10) {
      mesS = '0' + mes;
    }
    else{
      mesS = ''+ mes;
    }
    if (hora < 10) {
      horaS = '0' + hora;
    }
    else{
      horaS = ''+ hora;
    }
    if (min < 10) {
      minS = '0' + min;
    }
    else{
      minS = ''+ min;
    }
    if (dia < 10) {
      diaS = '0' + dia;
    }
    else{
      diaS = ''+ dia;
    }
    var datetime = diaS + "/"
                + mesS  + "/" 
                + currentdate.getFullYear() + " | "  
                + horaS + ":"  
                + minS;
    this.servicioDatos.fechaSet = datetime;
    return datetime;
  }
  change():void{
    this.bool = true;
  }

}
