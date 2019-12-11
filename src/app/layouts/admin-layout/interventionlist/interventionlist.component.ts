import { Component, OnInit } from '@angular/core';
import { Intervention } from 'app/entities/intervention';
import { InterventionService } from 'app/services/intervention.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-interventionlist',
  templateUrl: './interventionlist.component.html',
  styleUrls: ['./interventionlist.component.scss']
})
export class InterventionlistComponent implements OnInit {
  private interventions:Intervention[];

  constructor(private _interventionService:InterventionService, private _router:Router) { }

  ngOnInit() {
    this._interventionService.getAll().subscribe((response)=>{
      this.interventions = response;      
    }, (error)=>{
      console.log(error);
    });
  }
  newIntervention(){
    this._router.navigate(['interventionform']);
  }
  update(i:Intervention){
    this._interventionService.setter(i);
    this._router.navigate(['interventionform']);
  }
  delete(i:number){
    if(confirm("Êtes-vous sur de vouloir supprimer l'intervention ?")){
      this._interventionService.deleteIntervention(i).subscribe((response)=>{
        this.ngOnInit();
        console.log(response);
      }, (error)=>{
        console.log(error);
      });
    }
  }
  navigate(destination:String,i:Intervention){
    if(destination == 'pu'){    
      this._interventionService.setter(i);
      this._router.navigate(['pieceslist']);
    }else if(destination == 'ge'){
      this._router.navigate(['gestionetats']);
    }
  }
}
