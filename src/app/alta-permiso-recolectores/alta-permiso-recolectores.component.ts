import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectoresPermiso } from '../ServicioAlertasRecolectoresPermiso.service';
import { ServicioInfoRecolectores } from '../ServicioInfoRecolectores.service';

@Component({
  selector: 'app-alta-permiso-recolectores',
  templateUrl: './alta-permiso-recolectores.component.html',
  styleUrls: ['./alta-permiso-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresPermiso, ServicioInfoRecolectores, Modales]
})
export class AltaPermisoRecolectoresComponent {

  public fecha = '';
  public bool = false;
  public bool2 = false;
  public categoria = '';
  public rec = '';
  tabla = [
    {id:'', value:''}
  ]
  constructor(private router:Router,
    private servicioAlertas:ServicioAlertasRecolectoresPermiso,
    private servicioInfo:ServicioInfoRecolectores,
    private modal:Modales) {
   }
  atrPagina(): void{
    this.modal.disp();
    this.router.navigateByUrl('detalle-recolectores');
  }
  adelPagina(): void{
    let tipo = document.getElementById('tipopermiso')! as HTMLSelectElement;
    let nombre = document.getElementById('permiso')! as HTMLInputElement;
    let vigencia = 'Vigente';
    let vigInicio = document.getElementById('desde')! as HTMLInputElement;
    let vigFin = document.getElementById('hasta')! as HTMLInputElement;
    let dict = [
      tipo.options[tipo.selectedIndex].text,
      nombre.value,
      vigencia,
      vigInicio.value,
      vigFin.value
    ]
    this.servicioInfo.pushPermiso(dict);
    this.modal.disp();
    this.servicioAlertas.boolModificaSet = true;
    this.router.navigateByUrl('detalle-recolectores');
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
  change():void{
    this.bool2 = true;
  }
  value():void{
    let val = document.getElementById('categoria')! as HTMLInputElement;
    if(val.value != '0'){
        this.bool = true;
        var e = document.getElementById('categoria') as HTMLSelectElement;
        this.categoria = e.options[e.selectedIndex].text.toLowerCase();
    }
    else{
      this.bool = false;
      this.bool2 = false;
      this.tabla = [
        {id:'', value:''}
      ]
    }
  }
  lleno():void{
    let val = document.getElementById('tipopermiso')! as HTMLInputElement;
    let per = document.getElementById('permiso')! as HTMLInputElement;
    let ubi = document.getElementById('ubi') as HTMLButtonElement;
    let desde = document.getElementById('desde') as HTMLButtonElement;
    let hasta = document.getElementById('hasta') as HTMLButtonElement;
    let desdeTime = Date.parse(desde.value);
    let hastaTime = Date.parse(hasta.value);
    if(val.value != '0' && per.value != '' && desde.value != '' && hasta.value != '' &&
    isNaN(desdeTime) == false && isNaN(hastaTime) == false){
      let e = document.getElementById('estado') as HTMLSelectElement;
      ubi.disabled = false;
    }
    else{
      let boton = document.getElementById('ubi')! as HTMLButtonElement;
      boton.disabled = true;
      ubi.disabled = true;
    }
  }
  padTo2Digits(num:number):string {
    return num.toString().padStart(2, '0');
  }
  getObjeto() {
    let s = '';
    switch (this.categoria) {
      case 'artículos obsoletos':
        s = 'rec';
        this.rec = 'Reciclable'
        break;
      case 'documentos obsoletos':
        s = 'rec';
        this.rec = 'Reciclable'
        break;
      case 'peligrosos':
        s = 'norec';
        this.rec = 'No reciclable'
        break;
      case 'sólidos urbanos':
        s = 'rec';
        this.rec = 'Reciclable'
        break;
      case 'valorizables':
        s = 'rec';
        this.rec = 'Reciclable'
        break;
    
      default:
        break;
    }
    return s;

  }

}
