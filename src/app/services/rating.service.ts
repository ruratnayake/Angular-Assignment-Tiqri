import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RatingService {
    private readonly ratingssUrl: string = 'api/ratings';

    constructor(private http: Http, private logger: LoggerService) { }

    getRatings(): Observable<any> {
        return this.http.get(this.ratingssUrl)
            .map(response => {
                return response.json().data;
            })
            .catch((error: string) => {
                this.logger.error(error);
                return Observable.throw(`There is an error while loading data: ${error}`);
            });
    }

}