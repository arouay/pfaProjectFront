import { Component, OnInit } from '@angular/core';
import { Piece } from 'app/entities/piece';
import { PieceService } from 'app/services/piece.service';

@Component({
  selector: 'app-stockpiece',
  templateUrl: './stockpiece.component.html',
  styleUrls: ['./stockpiece.component.scss']
})
export class StockpieceComponent implements OnInit {
  private pieces:Piece[];
  private filtredPieces:Piece[];
  private prix:String[]=[];
  private filtredPrix;
  private filtredDesignation;
  private designations:String[]=[];
  
  private filPrix:number = 0;
  private filDes:String;
  private filRef:String;

  constructor(private _pieceService:PieceService) { }

  ngOnInit() {
    this._pieceService.getAll().subscribe(
      (Response)=>{
        this.pieces = Response;
        this.pieces.forEach(piece => {          
          this.prix.push(piece.prix.toString());
          this.designations.push(piece.designation);
        });
        this.filtredPrix = new Set(this.prix);        
        this.filtredDesignation = new Set(this.designations);
        this.reset();
      }, (error)=>{
        console.log(error);
      }
    );
  }
  filtre(){
    if((this.filRef == undefined || this.filRef == '') && (this.filDes == undefined|| this.filRef == '') && this.filPrix == 0){
      this.reset();
    }else if((this.filRef == undefined || this.filRef == '')){
      this.filtredPieces = this.pieces.filter(p=>{
        return (p.designation == this.filDes && p.prix == this.filPrix);
      }); 
    }else if((this.filDes == undefined|| this.filRef == '')){
      this.filtredPieces = this.pieces.filter(p=>{
        return (p.reference == this.filRef && p.prix == this.filPrix);
      });
    }else if(this.filPrix == 0){
      this.filtredPieces = this.pieces.filter(p=>{
        return (p.reference == this.filRef && p.designation == this.filDes);
      }); 
    }else {
      this.filtredPieces = this.pieces.filter(p=>{
        return (p.reference == this.filRef && p.designation == this.filDes && p.prix == this.filPrix);
      });  
    }          
  }
  reset(){
    this.filtredPieces = this.pieces;
  }
}
