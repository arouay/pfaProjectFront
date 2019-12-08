import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Facture } from 'app/entities/facture';
import { FactureService } from 'app/services/facture.service';


@Component({
  selector: 'app-factureform',
  templateUrl: './factureform.component.html',
  styleUrls: ['./factureform.component.scss']
})
export class FactureformComponent implements OnInit {
  private facture:Facture;
  constructor(private _matDialog: MatDialog, private _factureService:FactureService) { }

  ngOnInit() {
    this.facture = new Facture();
  }
  close() {
    this._matDialog.closeAll();
  }
  add(){
   this._factureService.newFacture(this.facture).subscribe(
     (response)=>{
     }, (error)=>{
       console.log(error);
     }
   );
   this._matDialog.closeAll();
  }
}
