import { Component, OnInit } from '@angular/core';
import { Intervention } from 'app/entities/intervention';
import { InterventionService } from 'app/services/intervention.service';

import { MatDialog,MatDialogConfig } from '@angular/material'
import { TypeformComponent } from 'app/typeform/typeform.component';
import { FactureformComponent } from 'app/factureform/factureform.component';
import { Router } from '@angular/router';
import { Type } from 'app/entities/type';
import { TypeService } from 'app/services/type.service';

@Component({
  selector: 'app-interventionform',
  templateUrl: './interventionform.component.html',
  styleUrls: ['./interventionform.component.scss']
})
export class InterventionformComponent implements OnInit {
  private intervention:Intervention;
  private types:Type[];
  constructor(private _interventionService:InterventionService, private _matDialog:MatDialog,private _router:Router, private typeService:TypeService) { }

  ngOnInit() {
    //test si l'objet est nouveau ou bien provenant d'un autre composant par le biais du service'
    if(this._interventionService.getter() == null){
      this.intervention = new Intervention();
    }else {
      this.intervention = this._interventionService.getter(); 
    }
    this.typeService.getAll().subscribe(
      (response)=>{
        this.types = response;
      }, (error)=>{
        console.log(error);
      }
    );
  }

  processForm(){    
    this._interventionService.newIntervention(this.intervention).subscribe((response)=>{      
      this._router.navigate(['interventionlist']);
    }, (error)=>{
      console.log(error);
    });
  }

  newType(){
    this._matDialog.open(TypeformComponent);
  }
  newFacture(){
    this._matDialog.open(FactureformComponent);
  }
}
