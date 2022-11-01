import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { Modales } from '../ModalService.service';
import { SalirPerfilesComponent } from '../salir-perfiles/salir-perfiles.component';


@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.css'],
  providers: [
    Modales
  ]
})
export class PerfilesComponent {

  modalRef?: BsModalRef;
  objetos = ['per', 'sup'];
  focus = 'per';
  permisos = [
    {
      tipo: 'permiso de transporte/recolección',
      nombre : 'TRANSPORTE-SEMARNAT-13975',
      vigencia: 'Vigente',
      vigInicio: '27/Sep/2017',
      vigFin : '27/Sep/2019'
    },
    {
      tipo: 'permiso de acopio',
      nombre : 'TRANSPORTE-SEMARNAT-13975',
      vigencia: 'Vencido',
      vigInicio: '27/Sep/2017',
      vigFin : '27/Sep/2019'
    },
    {
      tipo: 'permiso de disposición de reciclaje',
      nombre : 'TRANSPORTE-SEMARNAT-13975',
      vigencia: 'Vigente',
      vigInicio: '27/Sep/2017',
      vigFin : '27/Sep/2019'
    },
    {
      tipo: 'plan de manejo',
      nombre : 'TRANSPORTE-SEMARNAT-13975',
      vigencia: 'Vigente',
      vigInicio: '27/Sep/2017',
      vigFin : '27/Sep/2019'
    },
    {
      tipo: '"otros" permisos',
      nombre : 'TRANSPORTE-SEMARNAT-13975',
      vigencia: 'Vigente',
      vigInicio: '27/Sep/2017',
      vigFin : '27/Sep/2019'
    },
    {
      tipo: '"otros" permisos',
      nombre : 'TRANSPORTE-SEMARNAT-13975',
      vigencia: 'Vigente',
      vigInicio: '27/Sep/2017',
      vigFin : '27/Sep/2019'
    }
  ]
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
  tabla =[
    {
      nombre: 'Órdenes',
      tipos: [
        'Generación de órdenes de salida',
        'Edición de órdenes de salida'
      ]
    },
    {
      nombre: 'Recolectores',
      tipos: [
        'Captura y edición de estados y municipios de jurisdicción',
        'Captura y edición de permisos y vigencias'
      ]
    },
    {
      nombre: 'Ubicaciones',
      tipos: [
        'Configuración y edición de ubicaciones',
        'Captura y edición de frecuencia de recolección por ubicación',
        'Captura y edición de volúmenes mínimos y máximos por ubicación',
      ]
    },
    {
      nombre: 'Tipo de residuo',
      tipos: [
        'Captura de residuo indicando categoría',
        'Captura de densidad por tipo de residuo',
        'Captura de si un residuo es reciclable o no',
      ]
    },
    {
      nombre: 'Bitácora',
      tipos: [
        'Poder revisar su indicador',
        'Permitir la visibilidad de logs',
      ]
    },
    
  ]
  column = [
    {field: 'accion', header: 'accion'},
    {field: 'nombre', header: 'nombre'},
    {field: 'numero', header: 'numero'},
    {field: 'fecha', header: 'fecha'},
    {field: 'hora', header: 'hora'},
  ];
  constructor(private router:Router, 
    private modalService: BsModalService,
    private modal:Modales) {
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
salir(){
  this.modal.modalSet = this.modalService.show(SalirPerfilesComponent);
}

}
