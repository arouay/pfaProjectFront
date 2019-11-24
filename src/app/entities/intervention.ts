export class Intervention {
    id:number;
    dateDebut:Date;
    dateFin:Date;
    commentaire:String;
    type:Type;
    facture:Facture;
    pieces:Pieces[];
}