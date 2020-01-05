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
  allInterventions:Intervention[];
  allVoitures:Voiture[];
  allClient:Client[];

  constructor(private _serviceEtat:EtatService, private _serviceIntervention:InterventionService) { }

  ngOnInit() {
    this._serviceEtat.getAll().subscribe((response)=>{
      this.allEtats = response;
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
}
