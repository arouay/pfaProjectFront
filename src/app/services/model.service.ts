import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Marque} from '../entities/marque';
import {Model} from '../entities/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private baseUrl: string = 'http://localhost:8080/modeles/';
  private modem: Model;
  constructor(private _httpClient: HttpClient) {
  }

  getAll() {
    return this._httpClient.get(this.baseUrl + 'all');
  }
  add(model: Model) {
    this._httpClient.post(this.baseUrl + 'add',
        JSON.parse(JSON.stringify(model))
    ).subscribe(
        response => {
          return response;
        }
    );
  }
}
