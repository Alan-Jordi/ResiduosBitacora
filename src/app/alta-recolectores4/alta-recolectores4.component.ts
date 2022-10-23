import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { EditaAltaRecolectoresComponent } from '../edita-alta-recolectores/edita-alta-recolectores.component';
import { EliminaAltaRecolectoresComponent } from '../elimina-alta-recolectores/elimina-alta-recolectores.component';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectores } from '../ServicioAlertasRecolectores.service';
import { ServicioAlertasRecolectoresPermiso } from '../ServicioAlertasRecolectoresPermiso.service';
import { ServicioDatos } from '../ServicioDatos.service';
import { ServicioInfoAlta } from '../ServicioInfoAlta.service';

@Component({
  selector: 'app-alta-recolectores4',
  templateUrl: './alta-recolectores4.component.html',
  styleUrls: ['./alta-recolectores4.component.css'],
  providers: [ServicioDatos,
    ServicioAlertasRecolectores,
    ServicioInfoAlta,
    ServicioAlertasRecolectores,
    ServicioAlertasRecolectoresPermiso,
    Modales,
    MatDatepickerModule,
    MatFormFieldModule,]
})
export class AltaRecolectores4Component {

  modalRef?: BsModalRef;
  public fecha = '';
  public hoy = '';
  public capturador = '';
  public noCol = '';
  public categoria = '';
  public rec = '';
  public num = 0;
  tabla;

  constructor(private router:Router, 
    private servicioDatos:ServicioDatos,
    private servicioAlertas:ServicioAlertasRecolectoresPermiso, 
    private modalService: BsModalService,
    private modal:Modales,
    private servicioAlertasRecolectores:ServicioAlertasRecolectores,
    public servicioInfo:ServicioInfoAlta) {
    this.fecha = servicioDatos.fechaGet;
    this.capturador = servicioDatos.capturadorGet;
    this.noCol = servicioDatos.noColGet;
    if(this.fecha == ''){
      this.fecha = this.date();
    }
    this.tabla = servicioInfo.permisoGet;
   }
   listadoPagina(): void{
    this.servicioAlertas.boolEliminaSet = false;
    this.servicioAlertas.boolEliminaSet = false;
    this.servicioAlertasRecolectores.boolAltaSet = true;
    this.router.navigateByUrl('listado-recolectores');
  }
  atrPagina(): void{
    this.servicioAlertas.boolEliminaSet = false;
    this.router.navigateByUrl('alta-recolectores3');
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
    this.servicioInfo.boolSet = true;
  }
  lleno():void{
    let val = document.getElementById('tipopermiso')! as HTMLInputElement;
    let per = document.getElementById('permiso')! as HTMLInputElement;
    let ubi = document.getElementById('ubi') as HTMLButtonElement;
    let desde = document.getElementById('desde') as HTMLInputElement;
    let hasta = document.getElementById('hasta') as HTMLInputElement;
    console.log(desde.value);
    console.log(hasta.value);
    if(val.value != '0' && per.value != '' && desde.value != '' && hasta.value != '' && 
    desde.value < hasta.value && desde.value >= this.hoy){
      let e = document.getElementById('estado') as HTMLSelectElement;
      ubi.disabled = false;
    }
    else{
      let boton = document.getElementById('ubi')! as HTMLButtonElement;
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
  lista():void{
    try {
      let i = 0;
      let estado = document.getElementById('tipopermiso') as HTMLSelectElement;
      let tipoTxt = estado.options[estado.selectedIndex].text;
      let per = document.getElementById('permiso')! as HTMLInputElement;
      let perTxt = per.value;
      let desde = document.getElementById('desde') as HTMLInputElement;
      let desdeDate = new Date(desde.value);
      desdeDate = new Date( desdeDate.getTime() + Math.abs(desdeDate.getTimezoneOffset()*60000));
      let desdeTxt = desdeDate.toLocaleDateString();
      let hasta = document.getElementById('hasta') as HTMLInputElement;
      let hastaDate = new Date(hasta.value);
      hastaDate = new Date( hastaDate.getTime() + Math.abs(hastaDate.getTimezoneOffset()*60000));
      let hastaTxt = hastaDate.toLocaleDateString();
      console.log(desdeDate + hastaTxt);
      console.log(this.tabla)
      this.servicioInfo.boolSet = true;
      this.num++;
      let datos = {id:this.num, tipo: tipoTxt, permiso: perTxt, desde: desdeTxt, hasta:hastaTxt}
      this.tabla.push(datos);
    } catch (error) {
      console.log(error)
    }
  }
  limpiar():void{
    let e = document.getElementById('tipopermiso') as HTMLSelectElement;
    let per = document.getElementById('permiso')! as HTMLInputElement;
    let ubi = document.getElementById('ubi') as HTMLButtonElement;
    let desde = document.getElementById('desde') as HTMLButtonElement;
    let hasta = document.getElementById('hasta') as HTMLButtonElement;
    per.value = '';
    ubi.value = '';
    desde.value = '';
    hasta.value = '';
    e.selectedIndex = 0;
    this.servicioInfo.boolSet = false;
    let boton = document.getElementById('ubi')! as HTMLButtonElement;
    boton.disabled = true;
    this.tabla = [
      {id: 0, tipo:'', permiso: '', desde: '', hasta: ''}
    ];
    this.num = 0;
  }
  elimina(tipo:string, permiso:string, desde:string, hasta:string):void{
    let i = 0;
    while(i < this.tabla.length){
      if(tipo == this.tabla[i].tipo && 
        permiso == this.tabla[i].permiso &&
        desde == this.tabla[i].desde &&
        hasta == this.tabla[i].hasta){
          this.tabla.splice(i,1);
          break;
      }
      i += 1;
    }
  }
  padTo2Digits(num:number):string {
    return num.toString().padStart(2, '0');
  }
  eliminaPer(id:number){
    this.servicioInfo.idSet = id;
    this.modal.modalSet = this.modalService.show(EliminaAltaRecolectoresComponent);
  }
  editaPer(id:number){
    this.servicioInfo.idSet = id;
    this.modal.modalSet = this.modalService.show(EditaAltaRecolectoresComponent);
  }

}
