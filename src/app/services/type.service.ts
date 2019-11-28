import { Injectable } from '@angular/core';

import {Http, RequestOptions,Headers, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';
import { Intervention } from 'app/entities/intervention';
import { Type } from 'app/entities/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  private baseUrl:string = 'http://localhost:8080/types/';//Tous les URLs concernant type ont la mème base
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  
  constructor(private _http:Http) { }
  newType(type:Type){

  }
}
