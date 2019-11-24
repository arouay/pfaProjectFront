import { Type } from "./type";
import { Facture } from "./facture";
import { Piece } from "./piece";


export class Intervention {
    id:number;
    dateDebut:Date;
    dateFin:Date;
    commentaire:String;
    type:Type;
    facture:Facture;
    pieces:Piece[];
}