import {Component, OnInit} from '@angular/core';
import {AuthService} from '../Authentification/auth.service';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {AuthenticationRequest} from '../entities/authenticationRequest';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    auth: AuthenticationRequest = new AuthenticationRequest();

    constructor(public authService: AuthService, public authServiceBack: AuthentificationService, private router: Router) {
    }

    ngOnInit() {
        console.log(this.authService.isAuthenticated());
        if (localStorage.getItem('token') !== null) {
            this.router.navigate(['dashboard'])
        }
    }

    login() {
        try {
            localStorage.removeItem('token');
            this.authServiceBack.login(this.auth).subscribe(reponse => {
                localStorage.setItem('token', reponse['jwt']);
                this.router.navigate(['dashboard']);
            })
        } catch (e) {
            alert('Login ou pwd incorrect!');
        }

    }

}
