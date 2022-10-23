export class ServicioDatos{
    private static capturador = '';
    private static noCol = '';
    private static fecha = '';
    public get capturadorGet(){
        return ServicioDatos.capturador;
    }
    public get noColGet(){
        return ServicioDatos.noCol;
    }
    public get fechaGet(){
        return ServicioDatos.fecha;
    }
    public set capturadorSet(capturador:string){
        ServicioDatos.capturador = capturador;
    }
    public set noColSet(noCol:string){
        ServicioDatos.noCol = noCol;
    }
    public set fechaSet(fecha:string){
        ServicioDatos.fecha = fecha;
    }
}