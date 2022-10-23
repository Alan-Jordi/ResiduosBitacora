import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioAlertas } from '../ServicioAlertas.service';

@Component({
  selector: 'app-alta-residuos',
  templateUrl: './alta-residuos.component.html',
  styleUrls: ['./alta-residuos.component.css'],
  providers:[ServicioAlertas]
})
export class AltaResiduosComponent {

  public bool = false;
  public fecha = '';

  constructor(private router:Router, private servicioAlertas:ServicioAlertas) {
    this.fecha = this.date();
   }

  listaPagina(): void{
    this.router.navigateByUrl('listado-residuos');
  }
  listaPaginaA(): void{
    this.servicioAlertas.boolAltaSet = true;
    this.router.navigateByUrl('listado-residuos');
  }
  alert(): void{
    this.bool = true;
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
    return datetime;
  }
  focusRadio(text:string): void{
    if (text == 'si-check-residuos') {
      let nRadio = document.getElementById('no-check-residuos')! as HTMLInputElement;
      nRadio.checked = false;
    }
    else if(text == 'no-check-residuos') {
      let nRadio = document.getElementById('si-check-residuos')! as HTMLInputElement;
      nRadio.checked = false;
    }
  }
}
