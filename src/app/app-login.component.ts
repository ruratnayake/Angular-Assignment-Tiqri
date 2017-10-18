import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { Component, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './app-login.component.html',
    styleUrls: ['./app-login.component.css']
})

export class AppLoginComponent implements OnInit {
    invalidLogin: boolean = false;
    loginErrorMessage: string;
    username: string;
    password: string;
    attempt: number = 0;
    disableLogin: boolean = false;

    constructor(private userService: UserService, private app: AppComponent, private location: Location){
    }

    ngOnInit() {
        this.userService.authenticateLogin()
            .subscribe((response) => {
                if (response)
                    this.location.back();
            });
    }

    signInUser(): void {
        this.attempt++;
        this.userService.signInUser({ username: this.username, password: this.password })
            .subscribe((response) => {
                console.log('Signin User: ', response);
                if (response && response.length > 0) {
                    this.app.updateLoginInfo();
                    this.location.back();
                    this.attempt = 0;
                    this.invalidLogin = false;
                } else {
                    this.invalidLogin = true;
                }
            });
    }


}