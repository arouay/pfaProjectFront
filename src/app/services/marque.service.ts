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

    getAll(p, n) {
        let url = this.baseUrl + 'all?page=' + p + '&size=' + n;
        return this._httpClient.get(url);
    }

    add(marque: Marque) {
        this._httpClient.post(this.baseUrl + 'add',
            JSON.parse(JSON.stringify(marque))
        ).subscribe(
            response => {
                return response;
            }
        );
    }
}
