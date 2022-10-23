export class ServicioAlertasRecolectoresUbi{
    private static boolModifica = false;
    private static boolElimina = false;

    public get boolModificaGet(){
        return ServicioAlertasRecolectoresUbi.boolModifica;
    }
    public set boolModificaSet(bool:boolean){
        ServicioAlertasRecolectoresUbi.boolModifica = bool;
    }
    public get boolEliminaGet(){
        return ServicioAlertasRecolectoresUbi.boolElimina;
    }
    public set boolEliminaSet(bool:boolean){
        ServicioAlertasRecolectoresUbi.boolElimina = bool;
    }
}