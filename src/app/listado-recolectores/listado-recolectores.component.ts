import { Component, AfterContentInit, Inject, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ServicioAlertasRecolectores } from '../ServicioAlertasRecolectores.service';

@Component({
  selector: 'app-listado-recolectores',
  templateUrl: './listado-recolectores.component.html',
  styleUrls: ['./listado-recolectores.component.css'],
  providers:[ServicioAlertasRecolectores]
})
export class ListadoRecolectoresComponent  {

  public  cont = 0;
  public styleCont = '0';
  // public bool = false;

  tabla = [
    {
      id: '0001', 
      razonSocial: 'Cid-sa Control Industrial de Desechos',
      rfc: 'CDSA01010100',
      tipoRecolector: 'Peligrosos',
      jurisdiccion : 'Nacional',
      vigencia: 'Vigente',
      estatus: true
    },
    {
      id: '0002', 
      razonSocial: 'Cid-sa Control Industrial de Desechos',
      rfc: 'CDSA01010100',
      tipoRecolector: 'Peligrosos',
      jurisdiccion : 'Nacional',
      vigencia: 'Vencido',
      estatus: true
    },
    {
      id: '0003', 
      razonSocial: 'Cid-sa Control Industrial de Desechos',
      rfc: 'CDSA01010100',
      tipoRecolector: 'Peligrosos',
      jurisdiccion : 'Nacional',
      vigencia: 'Por vencer',
      estatus: true
    },
    {
      id: '0004', 
      razonSocial: 'Cid-sa Control Industrial de Desechos',
      rfc: 'CDSA01010100',
      tipoRecolector: 'Peligrosos',
      jurisdiccion : 'Nacional',
      vigencia: 'Vigente',
      estatus: false
    },
    {
      id: '0005', 
      razonSocial: 'Cid-sa Control Industrial de Desechos',
      rfc: 'CDSA01010100',
      tipoRecolector: 'Peligrosos',
      jurisdiccion : 'Nacional',
      vigencia: 'Vigente',
      estatus: false
    },
    {
      id: '0006', 
      razonSocial: 'Cid-sa Control Industrial de Desechos',
      rfc: 'CDSA01010100',
      tipoRecolector: 'Peligrosos',
      jurisdiccion : 'Nacional',
      vigencia: 'Vigente',
      estatus: false
    },
    {
      id: '0007', 
      razonSocial: 'Cid-sa Control Industrial de Desechos',
      rfc: 'CDSA01010100',
      tipoRecolector: 'Peligrosos',
      jurisdiccion : 'Nacional',
      vigencia: 'Vigente',
      estatus: false
    },
    {
      id: '0008', 
      razonSocial: 'Cid-sa Control Industrial de Desechos',
      rfc: 'CDSA01010100',
      tipoRecolector: 'Peligrosos',
      jurisdiccion : 'Nacional',
      vigencia: 'Vigente',
      estatus: false
    }
  ];
  column = [
    {field: 'razonSocial', header: 'razonSocial'},
    {field: 'rfc', header: 'rfc'},
    {field: 'tipoRecolector', header: 'tipoRecolector'},
    {field: 'jurisdiccion', header: 'jurisdiccion'},
    {field: 'vigencia', header: 'vigencia'},
    {field: 'estatus', header: 'estatus'},
    {field: 'detalle', header: 'detalle'},
  ];

  // tabla = [
  //     {
      //  id: null, 
      // razonSocial: null,
      // rfc: null,
      // tipoRecolector: null,
      // jurisdiccion : null,
      // vigencia: null,
      // estatus: false
  //   }
  // ];
  // async ngAfterContentInit(){
  //   while(this.cont <= 100){
  //     this.cont += 1;
  //     this.styleCont = 'width:'+this.cont+'%';
  //     await new Promise(resolve => setTimeout(resolve, 10));
  //   }
  //   await new Promise(resolve => setTimeout(resolve, 500));
  //   this.bool = true;
  // }

  constructor(private router:Router,@Inject(DOCUMENT) document: Document,
  private servicioAlertasRecolectores:ServicioAlertasRecolectores) { }

  altaPagina(): void{
      this.router.navigateByUrl('alta-recolectores');
  }
  editaPagina(): void{
    this.router.navigateByUrl('edita-residuos');
  }
  contMas(): void{
    this.cont += 1;
    this.styleCont = 'style="width:'+this.cont+'%"'
  }
  public get boolAlta(){
    return this.servicioAlertasRecolectores.boolAltaGet;
  }
  public get boolElimina(){
    return this.servicioAlertasRecolectores.boolEliminaGet;
  }
  click():void{
    this.servicioAlertasRecolectores.boolAltaSet = false;
    this.servicioAlertasRecolectores.boolEliminaSet = false;
  }
  // public get boolEdita(){
  //   return this.servicioAlertas.boolEditaGet;
  // }

  async verChecked(check:boolean, i:number){
    await new Promise(resolve => setTimeout(resolve, 200));
    try {
        this.tabla[i].estatus = !this.tabla[i].estatus;
    }
    catch (error) {
      
    }
      
  }

  getObjeto(i:number) {
    var s = this.tabla[i].vigencia;
    switch (s) {
      case "Vigente":
        s = 'vigente'
        break;
      case "Vencido":
        s = 'vencido'
        break;
      case "Por vencer":
        s = 'vencer'
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
