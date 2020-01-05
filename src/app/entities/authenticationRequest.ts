export class AuthenticationRequest {
    username: string;
    password: string;

    AuthenticationRequest() {
        this.username = '';
        this.password = '';
    }
}
