import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectoresUbi } from '../ServicioAlertasRecolectoresUbi.service';
import { ServicioInfoRecolectores } from '../ServicioInfoRecolectores.service';

@Component({
  selector: 'app-edita-ubicacion-recolectores',
  templateUrl: './edita-ubicacion-recolectores.component.html',
  styleUrls: ['./edita-ubicacion-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresUbi, ServicioInfoRecolectores, Modales]
})
export class EditaUbicacionRecolectoresComponent {

  public fecha = '';
  public bool = false;
  public bool2 = false;
  public categoria = '';
  public rec = '';
  tabla = [
    {estado:'', municipios:['']}
  ]
  constructor(private router:Router,
    private servicioAlertas:ServicioAlertasRecolectoresUbi,
    private servicioInfo:ServicioInfoRecolectores,
    private modal:Modales) {
   }
  atrPagina(): void{
    this.modal.disp();
    this.router.navigateByUrl('detalle-recolectores');
  }
  adelPagina(): void{
    let estado = this.tabla[1].estado;
    let municipios = this.tabla[1].municipios;
    this.servicioInfo.editaUbi(estado,municipios);
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
  // value():void{
  //   let val = document.getElementById('categoria')! as HTMLInputElement;
  //   if(val.value != '0'){
  //       this.bool = true;
  //       var e = document.getElementById('categoria') as HTMLSelectElement;
  //       this.categoria = e.options[e.selectedIndex].text.toLowerCase();
  //   }
  //   else{
  //     this.bool = false;
  //     this.bool2 = false;
  //     this.tabla = [
  //       {id:'', value:''}
  //     ]
  //   }
  // }
  valueEst():void{
    let val = document.getElementById('estado')! as HTMLInputElement;
    let d = document.getElementById('municipio') as HTMLSelectElement;
    if(val.value != '0'){
        let e = document.getElementById('estado') as HTMLSelectElement;
        d.disabled = false;
    }
    else{
      let boton = document.getElementById('ubi')! as HTMLButtonElement;
      boton.disabled = true;
      d.disabled = true;
      d.selectedIndex = 0;
    }
  }
  valueMun():void{
    let d = document.getElementById('municipio') as HTMLSelectElement;
    if(d.value != '0'){
        let boton = document.getElementById('ubi')! as HTMLButtonElement;
        boton.disabled = false;
    }
    else{
      let boton = document.getElementById('ubi')! as HTMLButtonElement;
      boton.disabled = true;
    }
  }
  lista():void{
    try {
      let boolEst = true;
      let boolRep = true;
      let i = 0;
      let estado = document.getElementById('estado') as HTMLSelectElement;
      let estadoTxt = estado.options[estado.selectedIndex].text;
      let municipio = document.getElementById('municipio') as HTMLSelectElement;
      let municipioTxt = municipio.options[municipio.selectedIndex].text;
      let but = document.getElementById('next') as HTMLButtonElement;
      but.disabled = false;
      this.bool = true;
      while(i < this.tabla.length){
        if(this.tabla[i].estado == estadoTxt){
          let j = 0;
          while(j < this.tabla[i].municipios.length){
            if(this.tabla[i].municipios[j] == municipioTxt){
              boolRep = false;
              break;
            }
            j += 1;
          }
          if(boolRep){
            this.tabla[i].municipios.push(municipioTxt);
          }
          boolEst = false;
          break;
        }
        i += 1;
      }
      if(boolEst){
        let val = {estado:estadoTxt, municipios:[municipioTxt]}
        this.tabla.push(val);
      }     
    } catch (error) {
      console.log(error)
    }
  }
  elimina(estado:string, municipio:string):void{
    console.log(municipio)
    let i = 0;
    while(i < this.tabla.length){
      if(estado == this.tabla[i].estado){
        let j = 0;
        while(j < this.tabla[i].municipios.length){
          if(municipio == this.tabla[i].municipios[j]){
            this.tabla[i].municipios.splice(j,1);
            if(this.tabla[i].municipios.length === 0){
              this.tabla.splice(i,1);
              if(this.tabla.length === 1){
                this.bool = false;
                let but = document.getElementById('next') as HTMLButtonElement;
                but.disabled = true;
              }
            }
            break;
          }
          j += 1;
        }
      }
      i += 1;
    }
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
  num(i:number){
    if (i == 0 || i%6 == 0){
      return 'margin-l2'
    }
    return 'margin-l2n'
  }

}
