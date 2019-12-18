import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { EtatService } from 'app/services/etat.service';
import { Etat } from 'app/entities/etat';
import { InterventionService } from 'app/services/intervention.service';
import { Intervention } from 'app/entities/intervention';

@Component({
  selector: 'app-gestionetats',
  templateUrl: './gestionetats.component.html',
  styleUrls: ['./gestionetats.component.scss']
})
export class GestionetatsComponent implements OnInit {
  add:boolean = false;
  todos:Etat[] = [];
  completed:Etat[] = [];
  etats:Etat[];
  etat:Etat;
  concernedIntervention:Intervention;
  constructor(private _serviceIntervention:InterventionService) { }

  ngOnInit() {   
    this.etat = new Etat();
    this.concernedIntervention = this._serviceIntervention.getter();
    this.etats = this.concernedIntervention.etats;
    console.log(this.etats)    
    this.etats.forEach(etat => {
      if(etat.faite){        
        this.completed.push(etat);
      }else {        
        this.todos.push(etat);        
      }
    });
  }
  onDrop(event:CdkDragDrop<Etat[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);           
    }else {
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex); 
      this.etats[event.currentIndex].faite = true;          
    }
  }
  newEtat(){
    this.add = true;
  }
  hideAdd(){
    this.add = false;
    this.etat = new Etat();
  }
  ajouter(){
    this.etat.faite = false;    
    this.todos.push(this.etat);
    this.concernedIntervention.etats.push(this.etat);
    //call service.update ...
    this.etat = new Etat();
  }
}
