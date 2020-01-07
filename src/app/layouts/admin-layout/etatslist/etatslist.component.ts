import { Component, OnInit } from '@angular/core';
import { Etat } from 'app/entities/etat';
import { EtatService } from 'app/services/etat.service';
import { Intervention } from 'app/entities/intervention';
import { Voiture } from 'app/entities/voiture';
import { Client } from 'app/entities/client';
import { InterventionService } from 'app/services/intervention.service';

@Component({
  selector: 'app-etatslist',
  templateUrl: './etatslist.component.html',
  styleUrls: ['./etatslist.component.scss']
})
export class EtatslistComponent implements OnInit {
  allEtats:Etat[];
  allInterventions:Intervention[]=[new Intervention()];
  allVoitures:Voiture[];
  allClient:Client[];
  intervention:number;
  commentaire:string;
  filtredEat:Etat[];  
  filter:boolean = false;

  constructor(private _serviceEtat:EtatService, private _serviceIntervention:InterventionService) { }

  ngOnInit() {
    this._serviceEtat.getAll().subscribe((response)=>{
      this.allEtats = response;
      this.filtredEat = this.allEtats;
      console.log(response);
    }, (error)=>{
      console.log(error);
    });
    this._serviceIntervention.getAll().subscribe((response)=>{
      this.allInterventions = response;
    }, (error)=>{
      console.log(error);
    });
  }
  rechercherParInterv(){  
    if(!this.filter){
      if(this.allInterventions.find(i=>i.id == this.intervention) == undefined){
        this.filtredEat = this.allEtats;
      }else {
        this.filtredEat = this.allInterventions.find(i=>i.id == this.intervention).etats;
      }      
    }        
  }
  rechercherParComm(){
    if(this.filter){
      this.filtredEat = this.allEtats.filter(i=>i.commentaire.includes(this.commentaire));           
    }  
  }
  filterParticulier(filtre:boolean){
    this.filtredEat = this.allEtats;
    this.filter = filtre;
  }
}
