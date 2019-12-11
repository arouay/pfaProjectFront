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
  private refs:String[]=[];
  private prix:String[]=[];
  private designations:String[]=[];
  constructor(private _pieceService:PieceService) { }

  ngOnInit() {
    this._pieceService.getAll().subscribe(
      (Response)=>{
        this.pieces = Response;
        this.pieces.forEach(element => {
          this.refs.push(element.reference);
          this.prix.push(element.prix.toString());
          this.designations.push(element.designation);
        });
      }, (error)=>{
        console.log(error);
      }
    );
  }

}
