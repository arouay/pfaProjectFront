import { Injectable } from '@angular/core';

import {Http, RequestOptions,Headers, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';

import { Facture } from 'app/entities/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  private baseUrl:string = 'http://localhost:8080/factures/';//Tous les URLs concernant facture ont la mème base
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});

  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  constructor(private _http:Http) { }

  newFacture(facture:Facture){
    return this._http.post(this.baseUrl+'new', JSON.stringify(facture), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  
  getAll(){
    return this._http.get(this.baseUrl+'all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
}
