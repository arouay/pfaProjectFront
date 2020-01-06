import { Component, OnInit } from '@angular/core';
import { Intervention } from 'app/entities/intervention';
import { InterventionService } from 'app/services/intervention.service';

import { MatDialog,MatDialogConfig } from '@angular/material'
import { TypeformComponent } from 'app/typeform/typeform.component';
import { FactureformComponent } from 'app/factureform/factureform.component';
import { Router } from '@angular/router';
import { Type } from 'app/entities/type';
import { TypeService } from 'app/services/type.service';
import { element } from '@angular/core/src/render3';
import { Facture } from 'app/entities/facture';
import { FactureService } from 'app/services/facture.service';

@Component({
  selector: 'app-interventionform',
  templateUrl: './interventionform.component.html',
  styleUrls: ['./interventionform.component.scss']
})
export class InterventionformComponent implements OnInit {
  private intervention:Intervention;
  private types:Type[];
  private factures:Facture[];
  private type:number;
  private facture:number;
  private isUpdate:boolean = false;
  valideDate:boolean = false;

  constructor(private _interventionService:InterventionService, private _matDialog:MatDialog,private _router:Router, private typeService:TypeService, private _factureService:FactureService) { }
  
  ngOnInit() {
    //test si l'objet est nouveau ou bien provenant d'un autre composant par le biais du service'
    if(this._interventionService.getter() == null){
      this.intervention = new Intervention();
      this.isUpdate = false;      
    }else {
      this.isUpdate =true;
      this.intervention = this._interventionService.getter(); 
      this._interventionService.setter(null);
      this.type = this.intervention.type.id;
      if(this.intervention.facture != null)
        this.facture = this.intervention.facture.id;      
    }
    this.typeService.getAll().subscribe(
      (response)=>{
        this.types = response;        
      }, (error)=>{
        console.log(error);
      }
    );
    this._factureService.getAll().subscribe(
      (response)=>{
        this.factures = response;    
      }, (error)=>{
        console.log(error);
      }
    );
  }

  processForm(){    
    this.intervention.type = this.types.find(i=>i.id == this.type);
    this.intervention.facture = this.factures.find(i=>i.id == this.facture);
    if(this.intervention.dateDebut > this.intervention.dateFin){
      this.valideDate = true;
    }else {
      this._interventionService.newIntervention(this.intervention).subscribe((response)=>{            
        this._router.navigate(['interventionlist']);
      }, (error)=>{
        console.log(error);
      });              
    }    
  }

  newType(){
    this._matDialog.open(TypeformComponent);
  }
  newFacture(){
    this._matDialog.open(FactureformComponent);
  }
}
