export class ServicioAlertas{
    private static boolAlta = false;
    private static boolEdita = false;

    public get boolAltaGet(){
        return ServicioAlertas.boolAlta;
    }
    public set boolAltaSet(bool:boolean){
        ServicioAlertas.boolAlta = bool;
    }

    public get boolEditaGet(){
        return ServicioAlertas.boolEdita;
    }
    public set boolEditaSet(bool:boolean){
        ServicioAlertas.boolEdita = bool;
    }
}