import { Injectable } from '@angular/core';
//import {Http, RequestOptions,Headers, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';
import { Intervention } from 'app/entities/intervention';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  private baseUrl:string = 'http://localhost:8080/interventions/';//Tous les URLs concernant intervention ont la mème base
  private intervention:Intervention;//pour partager l'objet entre les composants

  constructor(private _httpClient:HttpClient) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  getAll(){
    
  }
  deleteIntervention(intervention:Intervention){

  }
  newIntervention(intervention:Intervention){
    return this._httpClient.post(this.baseUrl+'new',intervention).map((response:Response)=>(response.json())).catch(this.errorHandler);//je laisse subscribe propre au composant pour assurer le traitement sur la réponse
  }
  getter(){
    return this.intervention;
  }
  setter(intervention:Intervention){
    this.intervention = intervention;
  }
}
