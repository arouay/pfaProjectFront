import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';
import { Intervention } from 'app/entities/intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {
  private baseUrl:string = 'http://localhost:8080/interventions';//Tous les URLs concernant intervention ont la mème base
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private intervention:Intervention;//pour partager l'objet entre les composants

  constructor(private _http:Http) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  getAll(){
    return this._http.get(this.baseUrl+'/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deleteIntervention(intervention:Intervention){

  }
  newIntervention(intervention:Intervention){
    return this._http.post(this.baseUrl+'/new', JSON.stringify(intervention), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getter(){
    return this.intervention;
  }
  setter(intervention:Intervention){
    this.intervention = intervention;
  }
}
