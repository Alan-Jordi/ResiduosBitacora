import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioDatos } from '../ServicioDatos.service';

@Component({
  selector: 'app-alta-recolectores2',
  templateUrl: './alta-recolectores2.component.html',
  styleUrls: ['./alta-recolectores2.component.css'],
  providers: [ServicioDatos]
})
export class AltaRecolectores2Component {

  public fecha = '';
  public capturador = '';
  public noCol = '';
  public bool = false;
  public bool2 = false;
  public categoria = '';
  public rec = '';
  tabla = [
    {id:'', value:''}
  ]
  constructor(private router:Router, private servicioDatos:ServicioDatos) {
    this.fecha = servicioDatos.fechaGet;
    this.capturador = servicioDatos.capturadorGet;
    this.noCol = servicioDatos.noColGet;
    if(this.fecha == ''){
      this.fecha = this.date()
    }
   }
  sigPagina(): void{
    this.router.navigateByUrl('alta-recolectores3');
  }
  atrPagina(): void{
    this.router.navigateByUrl('alta-recolectores');
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
  lista(id:string, value:string):void{
    try {
      let lista = document.getElementById(id) as HTMLInputElement;
      if (lista.checked){
        let data = {id:id, value:value};
        this.tabla.push(data);
        this.bool2 = true;
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
