export class ServicioAlertasRecolectores{
    private static boolAlta = false;
    private static boolElimina = false;

    public get boolAltaGet(){
        return ServicioAlertasRecolectores.boolAlta;
    }
    public set boolAltaSet(bool:boolean){
        ServicioAlertasRecolectores.boolAlta = bool;
    }
    public get boolEliminaGet(){
        return ServicioAlertasRecolectores.boolElimina;
    }
    public set boolEliminaSet(bool:boolean){
        ServicioAlertasRecolectores.boolElimina = bool;
    }
}