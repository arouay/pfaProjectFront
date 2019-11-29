import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Marque} from '../entities/marque';

@Injectable({
    providedIn: 'root'
})
export class MarqueService {
    private baseUrl = 'http://localhost:8080/marques/';
    private marque: Marque;

    constructor(private _httpClient: HttpClient) {
    }

    getAll() {
        return this._httpClient.get(this.baseUrl + 'all');
    }

    add(marque: Marque) {
        return this._httpClient.post(this.baseUrl + 'add',
            JSON.parse(JSON.stringify(marque))
        ).subscribe(
            response => {
                console.log(response);
            }
        );
    }
}
