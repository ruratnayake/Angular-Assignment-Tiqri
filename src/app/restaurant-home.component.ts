import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'tasty-home',
    templateUrl: './restaurant-home.component.html'
})
export class RestaurantHomeComponent {
    cityName: string;
    cities: string[];

    constructor(private router: Router) {
        this.cities = ['Rajagiriya','Nugegoda','Bambalapitiya']
    }

    search() {
        if (this.cityName == '')
            return;
        this.router.navigate(['/restaurants-of-city', this.cityName]);
    }

}
