import { LoggerService } from '../services/logger.service';
import { UserService } from '../services/user.service';
import { RestaurantsService } from '../services/restaurants.service';
import { RatingService } from '../services/rating.service';
import { NgModule } from '@angular/core';

@NgModule({
    providers: [RatingService, RestaurantsService, UserService, LoggerService],

})
export class ServiceModule { }
