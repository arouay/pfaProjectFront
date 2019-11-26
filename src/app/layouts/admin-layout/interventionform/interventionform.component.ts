import { Component, OnInit } from '@angular/core';
import { Intervention } from 'app/entities/intervention';
import { InterventionService } from 'app/services/intervention.service';

@Component({
  selector: 'app-interventionform',
  templateUrl: './interventionform.component.html',
  styleUrls: ['./interventionform.component.scss']
})
export class InterventionformComponent implements OnInit {
  private intervention:Intervention;

  constructor(private _interventionService:InterventionService) { }

  ngOnInit() {
    //test si l'objet est nouveau ou bien provenant d'un autre composant par le biais du service'
    if(this._interventionService.getter() == null){
      this.intervention = new Intervention();
    }else {
      this.intervention = this._interventionService.getter();
    }
    
  }

  processForm(){
    this._interventionService.newIntervention(this.intervention).subscribe((response)=>{
      console.log(response);
    }, (error)=>{
      console.log(error);
    });
  }

}
