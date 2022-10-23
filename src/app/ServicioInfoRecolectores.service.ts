export class ServicioInfoRecolectores{
    private static id:number;
    private static tabla = [
      {
        id:0,
        residuo:'Aceite', 
        denReal:'000001', 
        denComp:'000001', 
        reciclaje:'No Reciclable'
      },
      {
        id:1,
        residuo:'Aerosol', 
        denReal:'000001', 
        denComp:'000001', 
        reciclaje:'No Reciclable'
      },
      {
        id:2,
        residuo:'Lámpara fluorescente', 
        denReal:'000001', 
        denComp:'000001', 
        reciclaje:'No Reciclable'
      },
      {
        id:3,
        residuo:'Pintura', 
        denReal:'000001', 
        denComp:'000001', 
        reciclaje:'Reciclable'
      },
      {
        id:4,
        residuo:'Aceite', 
        denReal:'000001', 
        denComp:'000001', 
        reciclaje:'No Reciclable'
      },
      
    ];
    private static permisos = [
        {
          id: 0,
          tipo: 'permiso de transporte/recolección',
          nombre : 'TRANSPORTE-SEMARNAT-13975',
          vigencia: 'Vigente',
          vigInicio: '27/Sep/2017',
          vigFin : '27/Sep/2019'
        },
        {
          id: 1,
          tipo: 'permiso de acopio',
          nombre : 'TRANSPORTE-SEMARNAT-13975',
          vigencia: 'Vencido',
          vigInicio: '27/Sep/2017',
          vigFin : '27/Sep/2019'
        },
        {
          id: 2,
          tipo: 'permiso de disposición de reciclaje',
          nombre : 'TRANSPORTE-SEMARNAT-13975',
          vigencia: 'Vigente',
          vigInicio: '27/Sep/2017',
          vigFin : '27/Sep/2019'
        },
        {
          id: 3,
          tipo: 'plan de manejo',
          nombre : 'TRANSPORTE-SEMARNAT-13975',
          vigencia: 'Vigente',
          vigInicio: '27/Sep/2017',
          vigFin : '27/Sep/2019'
        },
        {
          id: 4,
          tipo: '"otros" permisos',
          nombre : 'TRANSPORTE-SEMARNAT-13975',
          vigencia: 'Vigente',
          vigInicio: '27/Sep/2017',
          vigFin : '27/Sep/2019'
        },
        {
          id: 5,
          tipo: '"otros" permisos',
          nombre : 'TRANSPORTE-SEMARNAT-13975',
          vigencia: 'Vigente',
          vigInicio: '27/Sep/2017',
          vigFin : '27/Sep/2019'
        }
      ];
      private static ubicaciones = [
        {
          id:0,
          estado: 'Sinaloa',
          municipios: ['Culiacán', 'Mazatlan', 'Guachimil']
        },
        {
          id:1,
          estado: 'Sonora',
          municipios: ['Nogales', 'Santa Cruz', 'Rosario', 'Hermosillo']
        },
        {
          id:2,
          estado: 'Quintana Roo',
          municipios: ['Cozumel', 'Tulum', 'Benito Juárez']
        }
      ];
      public pushResiduo(s:string[][]){
        for (let i = 0; i < s.length; i++) {
          if (i != 0) {
            let dict = {
              id:ServicioInfoRecolectores.tabla.length,
              residuo:s[i][0],
              denReal:'000001',
              denComp:'000001',
              reciclaje:s[i][1]
            }
            ServicioInfoRecolectores.tabla.push(dict);
          }
          
        }
      }
      public eliminaResiduo(){
        for (let i = 0; i < ServicioInfoRecolectores.tabla.length; i++) {
            if (ServicioInfoRecolectores.tabla[i].id == this.idGet){
                ServicioInfoRecolectores.tabla.splice(i,1);
                this.idSet = -1;
                break;
            }
        }
      }
      public editaResiduo(s:string[]){
        let dict = {
            id:ServicioInfoRecolectores.id,
            residuo:s[0],
            denReal:'000001',
            denComp:'000001',
            reciclaje:s[1]
          }
          for (let i = 0; i < ServicioInfoRecolectores.tabla.length; i++) {
            if (i == this.idGet){
                ServicioInfoRecolectores.tabla[i].id = dict.id;
                ServicioInfoRecolectores.tabla[i].residuo = dict.residuo;
                ServicioInfoRecolectores.tabla[i].denReal = dict.denReal;
                ServicioInfoRecolectores.tabla[i].denComp = dict.denComp;
                ServicioInfoRecolectores.tabla[i].reciclaje = dict.reciclaje;
                this.idSet = -1;
                break;
            }         
        }
      }
      public get resGet(){
        return ServicioInfoRecolectores.tabla;
      }
      public pushPermiso(s:string[]){
        let dict = {
            id:ServicioInfoRecolectores.permisos.length,
            tipo:s[0],
            nombre:s[1],
            vigencia:s[2],
            vigInicio:s[3],
            vigFin:s[4]
          }
          ServicioInfoRecolectores.permisos.push(dict);
      }
      public eliminaPermiso(){
        for (let i = 0; i < ServicioInfoRecolectores.permisos.length; i++) {
            if (ServicioInfoRecolectores.permisos[i].id == this.idGet){
                ServicioInfoRecolectores.permisos.splice(i,1);
                this.idSet = -1;
                break;
            }
        }
      }
      public editaPermiso(s:string[]){
        let dict = {
            id:ServicioInfoRecolectores.id,
            tipo:s[0],
            nombre:s[1],
            vigencia:s[2],
            vigInicio:s[3],
            vigFin:s[4]
          }
          for (let i = 0; i < ServicioInfoRecolectores.permisos.length; i++) {
            if (i == this.idGet){
                ServicioInfoRecolectores.permisos[i].id = dict.id;
                ServicioInfoRecolectores.permisos[i].tipo = dict.tipo;
                ServicioInfoRecolectores.permisos[i].nombre = dict.nombre;
                ServicioInfoRecolectores.permisos[i].vigencia = dict.vigencia;
                ServicioInfoRecolectores.permisos[i].vigInicio = dict.vigInicio;
                ServicioInfoRecolectores.permisos[i].vigFin = dict.vigFin;
                this.idSet = -1;
                break;
            }         
        }
      }
      public get permisoGet(){
        return ServicioInfoRecolectores.permisos;
      }
      public pushUbi(estado:string[], mun:string[][]){
        for (let i = 0; i < estado.length; i++) {
          let dict = {
            id:ServicioInfoRecolectores.ubicaciones.length,
            estado:estado[i],
            municipios:mun[i]
          }
          console.log(ServicioInfoRecolectores.ubicaciones.length);
          ServicioInfoRecolectores.ubicaciones.push(dict);
        }
        console.log(ServicioInfoRecolectores.ubicaciones);  
      }
      public eliminaUbi(){
        for (let i = 0; i < ServicioInfoRecolectores.ubicaciones.length; i++) {
            if (ServicioInfoRecolectores.ubicaciones[i].id == this.idGet){
                ServicioInfoRecolectores.ubicaciones.splice(i,1);
                this.idSet = -1;
                break;
            }    
        }
        console.log(ServicioInfoRecolectores.ubicaciones)
      }
      public editaUbi(estado:string, mun:string[]){
        let dict = {
          id:ServicioInfoRecolectores.permisos.length,
          estado:estado,
          municipios:mun
        }
          for (let i = 0; i < ServicioInfoRecolectores.ubicaciones.length; i++) {
            if (i == this.idGet){
                ServicioInfoRecolectores.ubicaciones[i].id = dict.id;
                ServicioInfoRecolectores.ubicaciones[i].estado = dict.estado;
                ServicioInfoRecolectores.ubicaciones[i].municipios = dict.municipios;
                this.idSet = -1;
                break;
            }         
        }
      }
      public get ubiGet(){
        return ServicioInfoRecolectores.ubicaciones;
      }
      // public pushRes(estado:string[], mun:string[][]){
      //   for (let i = 0; i < estado.length; i++) {
      //     let dict = {
      //       id:ServicioInfoRecolectores.ubicaciones.length,
      //       estado:estado[i],
      //       municipios:mun[i]
      //     }
      //     console.log(ServicioInfoRecolectores.ubicaciones.length);
      //     ServicioInfoRecolectores.ubicaciones.push(dict);
      //   }
      //   console.log(ServicioInfoRecolectores.ubicaciones);  
      // }
      // public eliminaRes(){
      //   for (let i = 0; i < ServicioInfoRecolectores.ubicaciones.length; i++) {
      //       if (ServicioInfoRecolectores.ubicaciones[i].id == this.idGet){
      //           ServicioInfoRecolectores.ubicaciones.splice(i,1);
      //           this.idSet = -1;
      //           break;
      //       }    
      //   }
      //   console.log(ServicioInfoRecolectores.ubicaciones)
      // }
      // public editaRes(estado:string, mun:string[]){
      //   let dict = {
      //     id:ServicioInfoRecolectores.permisos.length,
      //     estado:estado,
      //     municipios:mun
      //   }
      //     for (let i = 0; i < ServicioInfoRecolectores.ubicaciones.length; i++) {
      //       if (i == this.idGet){
      //           ServicioInfoRecolectores.ubicaciones[i].id = dict.id;
      //           ServicioInfoRecolectores.ubicaciones[i].estado = dict.estado;
      //           ServicioInfoRecolectores.ubicaciones[i].municipios = dict.municipios;
      //           this.idSet = -1;
      //           break;
      //       }         
      //   }
      // }
      public get idGet(){
        return ServicioInfoRecolectores.id;
      }
      public set idSet(id:number){
        ServicioInfoRecolectores.id = id;
      }
}