import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ServicioAlertasRecolectoresDetalles } from '../ServicioAlertasRecolectoresDetalle.service';
import { ServicioAlertasRecolectoresUbi } from '../ServicioAlertasRecolectoresUbi.service';
import { ServicioAlertasRecolectoresPermiso } from '../ServicioAlertasRecolectoresPermiso.service';
import { EliminaRecolectoresComponent } from '../elimina-recolectores/elimina-recolectores.component';
import { EliminaUbicacionRecolectoresComponent } from '../elimina-ubicacion-recolectores/elimina-ubicacion-recolectores.component';
import { EliminaPermisoRecolectoresComponent } from '../elimina-permiso-recolectores/elimina-permiso-recolectores.component';
import { Modales } from '../ModalService.service';
import { AltaResiduoRecolectoresComponent } from '../alta-residuo-recolectores/alta-residuo-recolectores.component';
import { EditarRecolectoresComponent } from '../editar-recolectores/editar-recolectores.component';
import { AltaPermisoRecolectoresComponent } from '../alta-permiso-recolectores/alta-permiso-recolectores.component';
import { EditaPermisoRecolectoresComponent } from '../edita-permiso-recolectores/edita-permiso-recolectores.component';
import { AltaUbicacionRecolectoresComponent } from '../alta-ubicacion-recolectores/alta-ubicacion-recolectores.component';
import { EditaUbicacionRecolectoresComponent } from '../edita-ubicacion-recolectores/edita-ubicacion-recolectores.component';
import { EliminaRecolectorComponent } from '../elimina-recolector/elimina-recolector.component';
import { ServicioInfoRecolectores } from '../ServicioInfoRecolectores.service';

@Component({
  selector: 'app-detalle-recolectores',
  templateUrl: './detalle-recolectores.component.html',
  styleUrls: ['./detalle-recolectores.component.css'],
  providers: [ServicioAlertasRecolectoresDetalles,
    ServicioAlertasRecolectoresUbi,
    ServicioAlertasRecolectoresPermiso,
    ServicioInfoRecolectores,
    Modales
  ]
})
export class DetalleRecolectoresComponent {

  modalRef?: BsModalRef;
  objetos = ['res', 'jur', 'per', 'cont', 'acop'];
  focus = 'res';
  tabla;
  // tabla = [
  //   {
  //     residuo:'Aceite', 
  //     denReal:'000001', 
  //     denComp:'000001', 
  //     reciclaje:'No Reciclable'
  //   },
  //   {
  //     residuo:'Aerosol', 
  //     denReal:'000001', 
  //     denComp:'000001', 
  //     reciclaje:'No Reciclable'
  //   },
  //   {
  //     residuo:'Lámpara fluorescente', 
  //     denReal:'000001', 
  //     denComp:'000001', 
  //     reciclaje:'No Reciclable'
  //   },
  //   {
  //     residuo:'Pintura', 
  //     denReal:'000001', 
  //     denComp:'000001', 
  //     reciclaje:'Reciclable'
  //   },
  //   {
  //     residuo:'Aceite', 
  //     denReal:'000001', 
  //     denComp:'000001', 
  //     reciclaje:'No Reciclable'
  //   },
    
  // ];
  ubicaciones;
  // ubicaciones = [
  //   {
  //     estado: 'Sinaloa',
  //     municipios: ['Culiacán', 'Mazatlan', 'Guachimil']
  //   },
  //   {
  //     estado: 'Sonora',
  //     municipios: ['Nogales', 'Santa Cruz', 'Rosario', 'Hermosillo']
  //   },
  //   {
  //     estado: 'Quintana Roo',
  //     municipios: ['Cozumel', 'Tulum', 'Benito Juárez']
  //   }
  // ]
  permisos;
  // permisos = [
  //   {
  //     tipo: 'permiso de transporte/recolección',
  //     nombre : 'TRANSPORTE-SEMARNAT-13975',
  //     vigencia: 'Vigente',
  //     vigInicio: '27/Sep/2017',
  //     vigFin : '27/Sep/2019'
  //   },
  //   {
  //     tipo: 'permiso de acopio',
  //     nombre : 'TRANSPORTE-SEMARNAT-13975',
  //     vigencia: 'Vencido',
  //     vigInicio: '27/Sep/2017',
  //     vigFin : '27/Sep/2019'
  //   },
  //   {
  //     tipo: 'permiso de disposición de reciclaje',
  //     nombre : 'TRANSPORTE-SEMARNAT-13975',
  //     vigencia: 'Vigente',
  //     vigInicio: '27/Sep/2017',
  //     vigFin : '27/Sep/2019'
  //   },
  //   {
  //     tipo: 'plan de manejo',
  //     nombre : 'TRANSPORTE-SEMARNAT-13975',
  //     vigencia: 'Vigente',
  //     vigInicio: '27/Sep/2017',
  //     vigFin : '27/Sep/2019'
  //   },
  //   {
  //     tipo: '"otros" permisos',
  //     nombre : 'TRANSPORTE-SEMARNAT-13975',
  //     vigencia: 'Vigente',
  //     vigInicio: '27/Sep/2017',
  //     vigFin : '27/Sep/2019'
  //   },
  //   {
  //     tipo: '"otros" permisos',
  //     nombre : 'TRANSPORTE-SEMARNAT-13975',
  //     vigencia: 'Vigente',
  //     vigInicio: '27/Sep/2017',
  //     vigFin : '27/Sep/2019'
  //   }
  // ]
  acciones = [
    {
      accion:'Generó', 
      descripcion: 'Permiso de recolección',
      nombre:'Arath Lezcano', 
      fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Editó', 
      descripcion: 'Permiso de recolección',
      nombre:'Arath Lezcano', 
      fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Activó', 
      descripcion: 'Nuevo recolector',
      nombre:'Arath Lezcano', 
      fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Activó', 
      descripcion: 'Nuevo recolector',
      nombre:'Arath Lezcano', 
      fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Desactivó', 
      descripcion: 'Recolector',
      nombre:'Arath Lezcano', 
      fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Activó',
      descripcion: 'Recolector', 
      nombre:'Arath Lezcano', 
      fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Activó',
      descripcion: 'Recolector', 
      nombre:'Arath Lezcano', 
      fecha:'23/03/2022', 
      hora:'01:11'
    },
    {
      accion:'Activó',
      descripcion: 'Recolector', 
      nombre:'Arath Lezcano', 
      fecha:'23/03/2022', 
      hora:'01:11'
    },
    
  ];
  column = [
    {field: 'accion', header: 'accion'},
    {field: 'nombre', header: 'nombre'},
    {field: 'numero', header: 'numero'},
    {field: 'fecha', header: 'fecha'},
    {field: 'hora', header: 'hora'},
  ];
  constructor(private router:Router, 
    private servicioAlertas:ServicioAlertasRecolectoresDetalles,
    private servicioUbi:ServicioAlertasRecolectoresUbi,
    private servicioPer:ServicioAlertasRecolectoresPermiso,
    private servicioInfo:ServicioInfoRecolectores,
    private modalService: BsModalService,
    private modal:Modales) {
      this.permisos = servicioInfo.permisoGet;
      this.ubicaciones = servicioInfo.ubiGet;
      this.tabla = servicioInfo.resGet;
    }

  get boolMod(){
    return this.servicioAlertas.boolModificaGet
  }
  get boolElim(){
    return this.servicioAlertas.boolEliminaGet
  }
  get boolModUbi(){
    return this.servicioUbi.boolModificaGet
  }
  get boolElimUbi(){
    return this.servicioUbi.boolEliminaGet
  }
  get boolModPer(){
    return this.servicioPer.boolModificaGet
  }
  get boolElimPer(){
    return this.servicioPer.boolEliminaGet
  }

  click():void{
    this.servicioAlertas.boolModificaSet = false;
    this.servicioAlertas.boolEliminaSet = false;
    this.servicioUbi.boolEliminaSet = false;
    this.servicioUbi.boolModificaSet = false;
    this.servicioPer.boolEliminaSet = false;
    this.servicioPer.boolModificaSet = false;
  }

  altaPagina(): void{
    this.router.navigateByUrl('alta-residuo-recolectores');
  }
  altaUbiPagina(): void{
    this.router.navigateByUrl('alta-ubicacion-recolectores');
  }
  elimPagina(): void{
    this.router.navigateByUrl('elimina-recolectores');
  }

  clase(s:string) {
    let e = document.getElementById(s)!;
    this.focus = s;
    e.className = "blue on text margin-x0";
    for(let item of this.objetos) {
      if (item != s) {
        let off = document.getElementById(item)!;
        off.className = "blue off text margin-x0";
      }
    }
    
  }
  reciclable(i:number){
    let s = this.tabla[i].reciclaje;
    switch (s) {
      case "Reciclable":
        s = 'rec'
        break;
      case "No Reciclable":
        s = 'norec'
        break;
      default:
          break;
  }
  return s;
}
vig(i:number){
  let s = this.permisos[i].vigencia;
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
getObjeto(i:number) {
  var s = this.acciones[i].accion;
  switch (s) {
    case "Generó":
      s = 'genero'
      break;
    case "Editó":
      s = 'edito'
      break;
    case "Activó":
      s = 'activo'
      break;
    case "Desactivó":
      s = 'desactivo'
      break;
    default:
      break;
  }
  return s;

}
textDrop(id:string, newTxt:string){
  let dd = document.getElementById(id);
  if(dd != null) dd.innerHTML = newTxt;
  console.log(dd);
}
eliminaRes(){
  this.click();
  this.modal.modalSet = this.modalService.show(EliminaRecolectoresComponent);
}
eliminaJur(id:number){
  this.click();
  this.servicioInfo.idSet = id;
  this.modal.modalSet = this.modalService.show(EliminaUbicacionRecolectoresComponent);
}
eliminaPer(id:number){
  this.click();
  this.servicioInfo.idSet = id;
  this.modal.modalSet = this.modalService.show(EliminaPermisoRecolectoresComponent);
}
altaRes(){
  this.click();
  this.modal.modalSet = this.modalService.show(AltaResiduoRecolectoresComponent);
}
altaJur(){
  this.click();
  this.modal.modalSet = this.modalService.show(AltaUbicacionRecolectoresComponent);
}
altaPer(){
  this.click();
  this.modal.modalSet = this.modalService.show(AltaPermisoRecolectoresComponent);
}
editaPer(id:number){
  this.click();
  this.servicioInfo.idSet = id;
  this.modal.modalSet = this.modalService.show(EditaPermisoRecolectoresComponent);
}
editaJur(id:number){
  this.click();
  this.servicioInfo.idSet = id;
  this.modal.modalSet = this.modalService.show(EditaUbicacionRecolectoresComponent);
}
editaRes(){
  this.click();
  this.modal.modalSet = this.modalService.show(EditarRecolectoresComponent);
}
elimina(){
  this.click();
  this.modal.modalSet = this.modalService.show(EliminaRecolectorComponent);
}

}
