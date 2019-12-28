import { Injectable } from '@angular/core';

import {Http, RequestOptions,Headers, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

import { Etat } from 'app/entities/etat';
@Injectable({
  providedIn: 'root'
})
export class EtatService {

  private baseUrl:string = 'http://localhost:8080/etats/';//Tous les URLs concernant facture ont la mème base
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  constructor(private _http:Http) { }

  newEtat(etat:Etat){
    return this._http.post(this.baseUrl+'new', JSON.stringify(etat), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  
  getAll(){
    return this._http.get(this.baseUrl+'all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
}