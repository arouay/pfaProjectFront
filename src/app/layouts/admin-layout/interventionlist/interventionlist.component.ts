import { Component, OnInit } from '@angular/core';
import { Intervention } from 'app/entities/intervention';
import { InterventionService } from 'app/services/intervention.service';
import { Router } from '@angular/router';

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
      console.log('mon objet : ',this.interventions)
      console.log('la reponse : ',response)
    }, (error)=>{
      console.log(error);
    });
  }
  newIntervention(){
    this._router.navigate(['interventionform']);
  }
}
