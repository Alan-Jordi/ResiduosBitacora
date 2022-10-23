import { Component, AfterContentInit, Inject, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ServicioAlertas } from '../ServicioAlertas.service';

@Component({
  selector: 'app-listado-residuos',
  templateUrl: './listado-residuos.component.html',
  styleUrls: ['./listado-residuos.component.css'],
  providers:[ServicioAlertas]
})
export class ListadoResiduosComponent implements AfterContentInit  {

  public  cont = 0;
  public styleCont = '0';
  public bool = false;

  tabla = [
    {
      id: '0001', 
      categoria: 'Sólidos',
      tipo: 'Ganchos',
      denNat: '100.0000000001 kg/m³',
      denComp : '100.0000000001 kg/m³',
      rec: 'No',
      estatus: true
    },
    {
      id: '0002', 
      categoria: 'Sólidos',
      tipo: 'Ganchos',
      denNat: '100.0000000001 kg/m³',
      denComp : '100.0000000001 kg/m³',
      rec: 'No',
      estatus: false
    },
    {
      id: '0004', 
      categoria: 'Sólidos',
      tipo: 'Ganchos',
      denNat: '100.0000000001 kg/m³',
      denComp : '100.0000000001 kg/m³',
      rec: 'No',
      estatus: true
    },
    {
      id: '0005', 
      categoria: 'Sólidos',
      tipo: 'Ganchos',
      denNat: '100.0000000001 kg/m³',
      denComp : '100.0000000001 kg/m³',
      rec: 'No',
      estatus: true
    },
    {
      id: '0006', 
      categoria: 'Sólidos',
      tipo: 'Ganchos',
      denNat: '100.0000000001 kg/m³',
      denComp : '100.0000000001 kg/m³',
      rec: 'No',
      estatus: true
    },
    {
      id: '0007', 
      categoria: 'Sólidos',
      tipo: 'Ganchos',
      denNat: '100.0000000001 kg/m³',
      denComp : '100.0000000001 kg/m³',
      rec: 'No',
      estatus: true
    },
    {
      id: '0008', 
      categoria: 'Sólidos',
      tipo: 'Ganchos',
      denNat: '100.0000000001 kg/m³',
      denComp : '100.0000000001 kg/m³',
      rec: 'No',
      estatus: true
    }
  ];
  column = [
    {field: 'categoría', header: 'categoría'},
    {field: 'tipo', header: 'tipo'},
    {field: 'denNat', header: 'denNat'},
    {field: 'denComp', header: 'denComp'},
    {field: 'rec', header: 'rec'},
    {field: 'estatus', header: 'estatus'},
    {field: 'detalle', header: 'detalle'},
  ]

  // tabla = [
  //     {
  //     id: null ,
  //     categoria: null,
  //     tipo: null,
  //     denNat: null,
  //     denComp : null,
  //     rec: null,
  //     estatus: true
  //   }
  // ];
  async ngAfterContentInit(){
    while(this.cont <= 100){
      this.cont += 1;
      this.styleCont = 'width:'+this.cont+'%';
      await new Promise(resolve => setTimeout(resolve, 10));
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    this.bool = true;
  }

  constructor(private router:Router,@Inject(DOCUMENT) document: Document,
  private servicioAlertas:ServicioAlertas) { }

  altaPagina(): void{
      this.router.navigateByUrl('alta-residuos');
  }
  editaPagina(): void{
    this.router.navigateByUrl('edita-residuos');
  }
  contMas(): void{
    this.cont += 1;
    this.styleCont = 'style="width:'+this.cont+'%"'
  }
  public get boolAlta(){
    return this.servicioAlertas.boolAltaGet;
  }
  click():void{
    this.servicioAlertas.boolAltaSet = false;
    this.servicioAlertas.boolEditaSet = false;
  }
  public get boolEdita(){
    return this.servicioAlertas.boolEditaGet;
  }

  async verChecked(check:boolean, i:number){
    await new Promise(resolve => setTimeout(resolve, 200));
    try {
        this.tabla[i].estatus = !this.tabla[i].estatus;
    }
    catch (error) {
      
    }
      
  }



  // checked(id:string):void{
  //   var check = document.getElementById(id)
  //   if (check != null){
  //     if (check.title)
  //   }
  // }

  

}
