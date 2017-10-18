import { LoggerService } from './services/logger.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantsService } from './services/restaurants.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '../app/core/models/location';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'tasty-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})

export class RestaurantListComponent implements OnInit, OnDestroy {
  invalidLocation: boolean = false;
  locationError: string;
  currentRoute: string;
  routeParms: any;
  city: string;
  subzone: string;
  cityInfo: Location;
  topRestaurants: any[];

  constructor(private route: ActivatedRoute, private router: Router,
    private logger: LoggerService, private restaurantsService: RestaurantsService) {
    this.currentRoute = this.router.routerState.snapshot.url;
  }

  public ngOnInit(): void {
    this.routeParms = this.route.params.subscribe(parms => {
      this.city = parms['city'];
      this.getLocationInformation();
    });
  }

  getLocationInformation() {
    this.invalidLocation = false;
    this.restaurantsService.getLocationInfo(this.city)
      .subscribe((data) => {
        if (data.length > 0) {
          this.cityInfo = data[0];
          this.displayRestaurantsOfLocation(this.cityInfo.entity_id);
        } else {
          this.logger.error(`Subzone\ city with name ${this.city} not found`);
          this.topRestaurants = [];
          this.invalidLocation = true;
        }
      },
      (error) => {
        this.logger.error('Error getting location information', error);
      });
  }

  displayRestaurantsOfLocation(entityId: number) {
    this.restaurantsService.getTopTenRestaurants(entityId, 'subzone')
      .subscribe((data) => {
        console.log(data);
        this.topRestaurants = data.best_rated_restaurant;
        this.subzone = data.subzone;
        console.log('Top Cusines:', this.topRestaurants);
      },
      (error) => {
        console.log(error);
      });
  }

  ngOnDestroy() {
    this.routeParms.unsubscribe();
  }
}
