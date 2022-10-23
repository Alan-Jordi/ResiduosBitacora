import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modales } from '../ModalService.service';
import { ServicioAlertasRecolectoresDetalles } from '../ServicioAlertasRecolectoresDetalle.service';
import { ServicioInfoRecolectores } from '../ServicioInfoRecolectores.service';

@Component({
  selector: 'app-alta-residuo-recolectores',
  templateUrl: './alta-residuo-recolectores.component.html',
  styleUrls: ['./alta-residuo-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresDetalles, ServicioInfoRecolectores, Modales]
})
export class AltaResiduoRecolectoresComponent {

  public fecha = '';
  public bool = false;
  public bool2 = false;
  public categoria = '';
  public rec = '';
  tabla = [
    {id:'', value:''}
  ]
  constructor(private router:Router, 
    private servicioAlertas:ServicioAlertasRecolectoresDetalles,
    private servicioInfo:ServicioInfoRecolectores,
    private modal:Modales) {
   }
  atrPagina(): void{
    this.modal.disp();
    this.router.navigateByUrl('detalle-recolectores');
  }
  adelPagina(): void{
    let s:string[][] = [[]];;
    for (let i = 0; i < this.tabla.length; i++) {
      if (i != 0) {
        let cat = '';
        if (this.categoria == 'peligrosos') {
          cat = 'No Reciclable'
        }
        else{
          cat = 'Reciclable'
        }
        let item = [this.tabla[i].value, cat];
        console.log(i);
        s.push(item);
        console.log(s)
      }   
    }
    this.servicioInfo.pushResiduo(s);
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
      let but = document.getElementById('next') as HTMLButtonElement;
      but.disabled = true;
    }
  }
  lista(id:string, value:string):void{
    try {
      let lista = document.getElementById(id) as HTMLInputElement;
      if (lista.checked){
        let data = {id:id, value:value};
        this.tabla.push(data);
        this.bool2 = true;
        let but = document.getElementById('next') as HTMLButtonElement;
        but.disabled = false;
      }
      else{
        let i = 0;
        while(i < this.tabla.length){
          if(this.tabla[i].id == id){
            this.tabla.splice(i,1);
          }
          i+=1;
          if(this.tabla.length == 1){
            this.bool2 = false;
            let but = document.getElementById('next') as HTMLButtonElement;
            but.disabled = true;
          }
        } 
      }     
    } catch (error) {
      
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

}
