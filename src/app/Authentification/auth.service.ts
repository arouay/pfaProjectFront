// src/app/auth/auth.service.ts

import {Injectable} from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {

    public getToken(): string {
        let token = localStorage.getItem('token');
        return token;
    }

    public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting whether or not the token is expired
        return tokenNotExpired(token);
    }

}
