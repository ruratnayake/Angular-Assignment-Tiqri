import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-about',
    template: `
    <div class="py-1 text-white opaque-overlay">
    <div class="container py-1" style="background-color: grey;">
        <div class="row form-horizontal py-2" style="padding-bottom: 0 !important;">
            <div class="form-group col-md-12">
                <h3>About</h3>
                <span>This is a sample project developed to showcase the Angular (Angular2 and above) development skills of <a [routerLink]="['/contact']">myself</a>. The assignment is as follows.</span>
                <h5>Assignment</h5>
                <p>Design and develop an application for a Startup to list restaurants in a city, view more details on those
                    and to view public reviews on them. The startup should allow its customers to write reviews for any restaurant.
                    The startup has decided to use Zomato API to get this done.</p>
                <ul>
                    <li>The application should be a modularized application with two or more functional modules.</li>
                    <li>Your application should ideally support restaurants in Colombo, Galle and Kandy</li>
                    <li>When users write reviews on your system, it should give them a real-time preview of how the review would
                        look like.</li>
                    <li>The application should prompt users to log in before posting a review. (a simple login to get name of
                        the user and the email)</li>
                    <li>The startup has recommended using the below API endpoints to make your work easy.</li>
                </ul>
            </div>
        </div>
        <input type='button' class='btn btn-default' value='Back to Previous Page' (click)='goBack()' />
    </div>
</div>  
    `,
    styles: (['a { color: black; font-weight: bold; }'])
})

export class AboutComponent {
    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();
    }
}