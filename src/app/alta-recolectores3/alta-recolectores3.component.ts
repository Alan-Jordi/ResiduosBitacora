import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioDatos } from '../ServicioDatos.service';

@Component({
  selector: 'app-alta-recolectores3',
  templateUrl: './alta-recolectores3.component.html',
  styleUrls: ['./alta-recolectores3.component.css'],
  providers: [ServicioDatos]
})
export class AltaRecolectores3Component {

  public fecha = '';
  public capturador = '';
  public noCol = '';
  public bool = false;
  public categoria = '';
  public rec = '';
  tabla = [
    {estado:'', municipios:['']}
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
    this.router.navigateByUrl('alta-recolectores4');
  }
  atrPagina(): void{
    this.router.navigateByUrl('alta-recolectores2');
  }
  change():void{
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
    this.servicioDatos.fechaSet = datetime;
    return datetime;
  }
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
      console.log(this.tabla)
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
  limpiar():void{
    let e = document.getElementById('estado') as HTMLSelectElement;
    let d = document.getElementById('municipio') as HTMLSelectElement;
    e.selectedIndex = 0;
    d.disabled = true;
    d.selectedIndex = 0;
    this.bool = false;
    let boton = document.getElementById('ubi')! as HTMLButtonElement;
    boton.disabled = true;
    this.tabla = [
      {estado:'', municipios:['']}
    ];
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

}
