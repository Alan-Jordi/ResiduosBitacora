export class ServicioInfoAlta{
    private static id:number;
    
    private static permisos = [
        {id: 0,tipo:'', permiso: '', desde: '', hasta: ''}
      ]
    private static bool = false;
   
    
     
     
      public pushPermiso(s:string[]){
        let dict = {
            id:ServicioInfoAlta.permisos.length,
            tipo:s[0],
            permiso:s[1],
            desde:s[2],
            hasta:s[3]
          }
          ServicioInfoAlta.permisos.push(dict);
      }
      public eliminaPermiso(){
        for (let i = 0; i < ServicioInfoAlta.permisos.length; i++) {
            if (ServicioInfoAlta.permisos[i].id == this.idGet){
                ServicioInfoAlta.permisos.splice(i,1);
                this.idSet = -1;
                break;
            }
            console.log(ServicioInfoAlta.permisos.length)
            console.log(ServicioInfoAlta.permisos)
            if (ServicioInfoAlta.permisos.length == 2){
              this.boolSet = false;
            }
            console.log(this.boolGet)
        }
      }
      public editaPermiso(s:string[]){
        let dict = {
            id:ServicioInfoAlta.id,
            tipo:s[0],
            permiso:s[1],
            desde:s[2],
            hasta:s[3],
          }
          for (let i = 0; i < ServicioInfoAlta.permisos.length; i++) {
            if (i == this.idGet){
                ServicioInfoAlta.permisos[i].id = dict.id;
                ServicioInfoAlta.permisos[i].tipo = dict.tipo;
                ServicioInfoAlta.permisos[i].permiso = dict.permiso;
                ServicioInfoAlta.permisos[i].desde = dict.desde;
                ServicioInfoAlta.permisos[i].hasta = dict.hasta;
                this.idSet = -1;
                break;
            }         
        }
      }
      public get permisoGet(){
        return ServicioInfoAlta.permisos;
      }

      public get idGet(){
        return ServicioInfoAlta.id;
      }
      public set idSet(id:number){
        ServicioInfoAlta.id = id;
      }
      public get boolGet(){
        return ServicioInfoAlta.bool;
      }
      public set boolSet(bool:boolean){
        ServicioInfoAlta.bool = bool;
      }
}
