import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Model} from '../entities/model';

@Injectable({
    providedIn: 'root'
})
export class ModelService {
    private baseUrl: string = 'http://localhost:8080/modeles/';
    private modem: Model;

    constructor(private _httpClient: HttpClient) {
    }

    getAll(p, n) {
        let url = this.baseUrl + 'all?page=' + p + '&size=' + n;
        return this._httpClient.get(url);
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
