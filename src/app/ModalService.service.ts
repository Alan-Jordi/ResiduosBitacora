import { BsModalRef } from "ngx-bootstrap/modal";

export class Modales{
    private static modalRef?: BsModalRef;

    public set modalSet(modal:BsModalRef){
        Modales.modalRef = modal;
    }

    public disp(){
        Modales.modalRef?.hide();
    }
}