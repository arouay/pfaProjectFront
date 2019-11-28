import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private baseUrl: string = 'http://localhost:8080/modeles/';

  constructor(private _httpClient: HttpClient) {
  }

  getAll() {
    return this._httpClient.get(this.baseUrl + 'all');
  }
}
