import { Component, OnInit, style } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-contact',
    template: `
    <div class="py-1 text-white opaque-overlay">
    <div class="container py-1" style="background-color: grey;">
        <div class="row form-horizontal py-2" style="padding-bottom: 0 !important;">
            <div class="form-group col-md-12">
                <h3>Contact Us</h3>
                <span>At the moment there is not contact us, but still you can contact me.</span>
                <h5>Developer Information</h5>
                <p>I, Ruwantha Ratnayake work as software enginner at <a href='https://www.tiqri.com/'>TIQRI</a> one of the leading IT services company in Sri Lanka. I'm passionate on new technologies, yet my main area of interest is .net technologies and forntend development frameworks. I have very limited skillset with user interface development, but yet manage to do some acceptable stuff with quite an affort. You can reach me in following links.</p>
                <ul>
                    <li><a href='https://www.linkedin.com/in/ruwantharatnayake/'>LinkedIn</a></li>
                    <li><a href='https://www.facebook.com/007ruwantha'>Facebook</a></li>
                    <li><a href='https://plus.google.com/108516334207759972382'>Google+</a></li>
                </ul>
            </div>
        </div>
        <input type='button' class='btn btn-default' value='Back to Previous Page' (click)='goBack()' />
    </div>
</div>  
    `,
    styles:([ 'a { color: black; font-weight: bold; }'])

})

export class ContactComponent {
    constructor(private location: Location) { }

    goBack(): void {
        this.location.back();
    }
}