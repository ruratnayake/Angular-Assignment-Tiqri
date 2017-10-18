import { LoggerService } from './logger.service';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Location } from '../core/models/location';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class RestaurantsService {
    private requestOptions: RequestOptions;
    private readonly apiBaseUrl = 'https://developers.zomato.com/api/v2.1';

    constructor(private http: Http, private logger: LoggerService) {
        this.requestOptions = new RequestOptions();
        this.requestOptions.headers = new Headers({ 'Content-Type': 'application/json', 'user-key': '7c8d292c591afafd228d76a67925e59a' });
    }

    getLocationInfo(cityName: string): Observable<any> {
        let url = `${this.apiBaseUrl}/locations?query=${cityName}`;

        return this.http.get(url, this.requestOptions)
            .map((response) => {
                return response.json().location_suggestions as Location[];
            })
            .catch((error: string) => {
                this.logger.error(error);
                return Observable.throw(`There is an error while loading data: ${error}`);
            });
    }

    getTopTenRestaurants(entityId: number, entityType: string) {
        let url = `${this.apiBaseUrl}/location_details?entity_id=${entityId}&entity_type=${entityType}`;

        return this.http.get(url, this.requestOptions)
            .map((response) => {
                return response.json();
            })
            .catch((error: string) => {
                this.logger.error(error);
                return Observable.throw(`There is an error while loading data: ${error}`);
            });
    }

    getRestaurantDetails(id: number): Observable<any> {
        let url = `${this.apiBaseUrl}/restaurant?res_id=${id}`;

        return this.http.get(url, this.requestOptions)
            .map((response) => {
                return response.json();
            })
            .catch((error: string) => {
                return Observable.throw(`There is an error while loading data: ${error}`);
            });
    }

    getRestaurantReviews(id: number): Observable<any> {
        let url = `${this.apiBaseUrl}/reviews?res_id=${id}`;

        return this.http.get(url, this.requestOptions)
            .map((response) => {
                return response.json();
            })
            .catch((error: string) => {
                this.logger.error(error);
                return Observable.throw(`There is an error while loading data: ${error}`);
            });
    }
}