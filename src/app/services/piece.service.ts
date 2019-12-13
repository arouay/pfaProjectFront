import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { error } from 'util';
import { Observable } from 'rxjs';
import { Piece } from 'app/entities/piece';
@Injectable({
  providedIn: 'root'
})
export class PieceService {
  private baseUrl:string = 'http://localhost:8080/pieces';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private piece:Piece;//pour partager l'objet entre les composants

  constructor(private _http:Http) { }
  errorHandler(){
    return Observable.throw(error || 'SERVER ERROR');
  }
  getAll(){
    return this._http.get(this.baseUrl+'/all',this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  deletePiece(id:number){
    return this._http.delete(this.baseUrl+'/delete/'+id,this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  newPiece(piece:Piece){
    return this._http.post(this.baseUrl+'/new', JSON.stringify(piece), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
  }
  getter(){
    return this.piece;
  }
  setter(piece:Piece){
    this.piece = piece;
  }
}
