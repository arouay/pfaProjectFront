import { Component, OnInit } from '@angular/core';
import { Piece } from 'app/entities/piece';
import { InterventionService } from 'app/services/intervention.service';

@Component({
  selector: 'app-piecelist',
  templateUrl: './piecelist.component.html',
  styleUrls: ['./piecelist.component.scss']
})
export class PiecelistComponent implements OnInit {
  private pieces:Piece[];
  constructor(private _interventionService:InterventionService) { }

  ngOnInit() {
    this.pieces = this._interventionService.getter().pieces;
  }

}
