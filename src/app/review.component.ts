import { Component, Input } from '@angular/core';

@Component({
    selector: 'tasty-review',
    templateUrl: './review.component.html'
})

export class ReviewComponent  {
    @Input() review: any;

    constructor() { }

}