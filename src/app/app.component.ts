import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';
import { LoggedUser } from './core/models/user';
import { RestaurantsService } from './services/restaurants.service';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '../app/core/models/location';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private currentUser: LoggedUser;

  constructor(private http: Http,
    private restaurantsService: RestaurantsService, private userService: UserService, private logger: LoggerService) {
  }

  public ngOnInit(): void {
    this.updateLoginInfo();
  }

  public updateLoginInfo(): void {
    this.userService.authenticateLogin()
      .subscribe((response) => {
        if (response) {
          this.currentUser = response;
        }
      });
  }

  signOut(): void {
    this.userService.signOutUser()
      .subscribe((response) => {
        if (response) {
          this.currentUser = undefined;
        }
      });
  }
}
