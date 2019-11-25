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
  private baseUrl:string = 'http://localhost:8080';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private intervention:Intervention;//pour partager l'objet entre les composants

  constructor(private _http:Http) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  getAll(){
    return this._http.get(this.baseUrl+'/interventions/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  newIntervention(intervention:Intervention){

  }
  getter(){
    return this.intervention;
  }
  setter(intervention:Intervention){
    this.intervention = intervention;
  }
}
