import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationRequest} from '../entities/authenticationRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private _httpClient: HttpClient) {
  }

  login(authenticationRequest: AuthenticationRequest) {
    return this._httpClient.post(this.baseUrl + 'authentificate',
        JSON.parse(JSON.stringify(authenticationRequest))
    );
  }
}
