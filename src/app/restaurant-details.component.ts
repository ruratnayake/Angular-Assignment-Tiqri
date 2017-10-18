import { LoggerService } from './services/logger.service';
import { RatingService } from './services/rating.service';
import { ContactComponent } from './contact.component';
import { RestaurantHomeComponent } from './restaurant-home.component';
import { UserService } from './services/user.service';
import { Observable } from 'rxjs/Rx';
import { Restaurant } from './core/models/restaurant';
import { RestaurantsService } from './services/restaurants.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'tasty-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})

export class RestaurantDetailsComponent {
  invalidIdError: any;
  routeParms: any;
  restaurantId: number;
  restaurant: any;
  reviews: any;
  latitude: number;
  longitude: number;
  zoom: number = 16;
  ratingOptions: any[];
  selectedRating: { rating: number, rating_text: string };
  newReview: { rating: number, rating_text: string, review_text: string, user: { name: string }, review_time_friendly: string };

  constructor(private route: ActivatedRoute, private router: Router, private location: Location, private logger:LoggerService,
    private restaurantsService: RestaurantsService, private userService: UserService, private ratingService: RatingService) {
    this.newReview = { rating: null, rating_text: '', review_text: '', user: { name: '' }, review_time_friendly: '' };
  }

  public ngOnInit(): void {
    this.routeParms = this.route.params.subscribe(parms => {
      this.restaurantId = +parms['id'];
      this.getRestaurantDetails();
    });
  }

  goBack(): void {
    this.location.back();
  }

  getRestaurantDetails() {
    Observable.forkJoin([this.restaurantsService.getRestaurantDetails(this.restaurantId),
    this.restaurantsService.getRestaurantReviews(this.restaurantId)])
      .subscribe((response) => {
        if (response[0]) {
          this.restaurant = response[0];
          this.latitude = +this.restaurant.location.latitude;
          this.longitude = +this.restaurant.location.longitude;
        } else {
          this.restaurant = undefined;
          this.invalidIdError = `Invalid request. There is no restaurant with referance ${this.restaurantId}.`
        }
        if (response[1]) {
          this.reviews = response[1];
          console.log("Restaurant Reviews:", this.reviews);
        } else {
          this.reviews = undefined;
        }
      },(error)=>{
        this.logger.error('Error getting reataurant details',error);
      });
  }

  writeReview(): void {
    this.userService.authenticateLogin(true)
      .subscribe((response) => {
        if (response) {
          Observable.forkJoin([this.ratingService.getRatings(), this.userService.authenticateLogin()])
            .subscribe((response) => {
              this.ratingOptions = response[0];
              this.newReview.user = response[1];
            });

        } else {
          this.router.navigate(['/login']);
        }
      });
  }

  NewRatingChange(): void {
    this.newReview.rating = +this.selectedRating.rating;
    this.newReview.rating_text = this.selectedRating.rating_text;
    this.newReview.review_time_friendly = "few mins ago";
  }

  postReview(): void {
    let copy = Object.assign({}, this.newReview);
    (this.reviews['user_reviews']).push({ review: copy });
    this.newReview.rating = null;
    this.newReview.rating_text = '';
    this.newReview.review_text = '';
    this.ratingOptions = undefined;
  }

  ngOnDestroy() {
    this.routeParms.unsubscribe();
  }
}