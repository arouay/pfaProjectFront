import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MarqueService {
    private baseUrl: string = 'http://localhost:8080/marques/';

    constructor(private _httpClient: HttpClient) {
    }

    getAll() {
        return this._httpClient.get(this.baseUrl + 'all');
    }
}
