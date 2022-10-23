export class ServicioAlertasRecolectoresDetalles{
    private static boolModifica = false;
    private static boolElimina = false;

    public get boolModificaGet(){
        return ServicioAlertasRecolectoresDetalles.boolModifica;
    }
    public set boolModificaSet(bool:boolean){
        ServicioAlertasRecolectoresDetalles.boolModifica = bool;
    }
    public get boolEliminaGet(){
        return ServicioAlertasRecolectoresDetalles.boolElimina;
    }
    public set boolEliminaSet(bool:boolean){
        ServicioAlertasRecolectoresDetalles.boolElimina = bool;
    }
}