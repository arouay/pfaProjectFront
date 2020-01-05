// src/app/auth/jwt.interceptor.ts

// ...
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService, private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 403) {
                    this.router.navigate(['auth'])
                }
            }
        });
    }
}
