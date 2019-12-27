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
  constructor(private _serviceIntervention:InterventionService, private _serviceEtat:EtatService) { }

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
      this.etats[event.currentIndex].faite = true;  
      //this.todos.splice(event.currentIndex,1);
      //this.completed.push(this.etats[event.currentIndex])      
      transferArrayItem(event.previousContainer.data,event.container.data,event.previousIndex,event.currentIndex);                      
    }
  }
  
  showHideAddClose(stat:boolean){
    if(stat){
      this.add = true;
    }else {
      this.add = false;
      this.etat = new Etat();
    }
  }
  ajouter(){
    this.etat.faite = false;      
    this._serviceEtat.newEtat(this.etat).subscribe((response)=>{
      console.log(response);            
      /*this._serviceIntervention.newEtat(this.concernedIntervention.id.toString(),response.id.toString()).subscribe((response)=>{
        console.log(response);
      }, (error)=>{
        console.log(error);
      });*/
    }, (error)=>{
      console.log(error);
    });
    this.todos.push(this.etat);   
    this.etat = new Etat();
  }
}
