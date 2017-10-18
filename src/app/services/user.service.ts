import { Router } from '@angular/router';
import { tryCatch } from 'rxjs/util/tryCatch';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { UserLogin } from '../core/models/user';
import { Injectable } from '@angular/core';
import { LoggedUser } from '../core/models/user';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class UserService {

    private readonly usersUrl: string = 'api/users';

    constructor(private http: Http, private router: Router, private cookieService: CookieService) { }

    signInUser(loginInfo: UserLogin): Observable<LoggedUser[]> {
        return this.http.get(this.usersUrl)
            .map(response => {
                return (response.json().data as LoggedUser[]).filter((user, index) => {
                    return (user['username'] == loginInfo.username || user['email'] == loginInfo.username) && user['password'] == loginInfo.password
                });
            })
            .do(users => {
                // if user credintials are valid, set cookie and return user;
                if (users && users.length > 0) {
                    this.cookieService.putObject('tasty#user_auth', { name: users[0].name, username: users[0].username, email: users[0].email });
                    return users[0];
                }
            })
            .catch((error: string) => {
                return Observable.throw(`There is an error while loading data: ${error}`);
            });
    }

    signOutUser(): Observable<boolean> {
        // remove user authentication cookie
        try {
            this.cookieService.remove('tasty#user_auth');
        } catch (error) {
            return Observable.of(false);
        } finally {
            return Observable.of(true);
        }
    }

    authenticateLogin(navigateToLogin?: boolean): Observable<any> {
        // get user data from cookie
        let authUser = this.cookieService.getObject('tasty#user_auth');
        if (authUser) {
            // return user data if authentication cookie do exist
            return Observable.of(authUser);
        } else {
            // if authentication cookie do not exist, and expect to route to login route
            if (navigateToLogin)
                this.router.navigate(['/login']);
        }
        return Observable.of(null);
    }
}