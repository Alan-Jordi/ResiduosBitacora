export class ServicioAlertasRecolectoresPermiso{
    private static boolModifica = false;
    private static boolElimina = false;

    public get boolModificaGet(){
        return ServicioAlertasRecolectoresPermiso.boolModifica;
    }
    public set boolModificaSet(bool:boolean){
        ServicioAlertasRecolectoresPermiso.boolModifica = bool;
    }
    public get boolEliminaGet(){
        return ServicioAlertasRecolectoresPermiso.boolElimina;
    }
    public set boolEliminaSet(bool:boolean){
        ServicioAlertasRecolectoresPermiso.boolElimina = bool;
    }
}