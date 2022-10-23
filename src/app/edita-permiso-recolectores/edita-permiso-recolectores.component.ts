import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectoresPermiso } from '../ServicioAlertasRecolectoresPermiso.service';
import { ServicioInfoRecolectores } from '../ServicioInfoRecolectores.service';

@Component({
  selector: 'app-edita-permiso-recolectores',
  templateUrl: './edita-permiso-recolectores.component.html',
  styleUrls: ['./edita-permiso-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresPermiso, ServicioInfoRecolectores, Modales]
})
export class EditaPermisoRecolectoresComponent {

  public fecha = '';
  public hoy = '';
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
    // this.router.navigateByUrl('detalle-recolectores');
  }
  adelPagina(): void{
    let tipo = document.getElementById('tipopermisoM')! as HTMLSelectElement;
    let nombre = document.getElementById('permisoM')! as HTMLInputElement;
    let vigencia = 'Vigente';
    let vigInicio = document.getElementById('desdeM')! as HTMLInputElement;
    let vigFin = document.getElementById('hastaM')! as HTMLInputElement;
    let dict = [
      tipo.options[tipo.selectedIndex].text,
      nombre.value,
      vigencia,
      vigInicio.value,
      vigFin.value
    ];
    this.servicioInfo.editaPermiso(dict);
    this.modal.disp();
    this.servicioAlertas.boolModificaSet = true;
    // this.router.navigateByUrl('detalle-recolectores');
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
    let datetime = diaS + "/"
                + mesS  + "/" 
                + currentdate.getFullYear() + " | "  
                + horaS + ":"  
                + minS;
    let hoy = currentdate.getFullYear() +  '-' + mesS + '-' + diaS;
    this.hoy = hoy;
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
    let val = document.getElementById('tipopermisoM')! as HTMLInputElement;
    let per = document.getElementById('permisoM')! as HTMLInputElement;
    let ubi = document.getElementById('ubiM') as HTMLButtonElement;
    let desde = document.getElementById('desdeM') as HTMLInputElement;
    let hasta = document.getElementById('hastaM') as HTMLInputElement;
    console.log(desde.value);
    console.log(hasta.value);
    if(val.value != '0' && per.value != '' && desde.value != '' && hasta.value != '' && 
    desde.value < hasta.value && desde.value >= this.hoy){
      let e = document.getElementById('estadoM') as HTMLSelectElement;
      ubi.disabled = false;
    }
    else{
      let boton = document.getElementById('ubiM')! as HTMLButtonElement;
      boton.disabled = true;
      ubi.disabled = true;
    }
    if (desde.value === '') {
        desde.classList.add("empty");
    } else {
        desde.classList.remove("empty");
    }

    if (hasta.value === '') {
        hasta.classList.add("empty");
    } else {
        hasta.classList.remove("empty");
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
