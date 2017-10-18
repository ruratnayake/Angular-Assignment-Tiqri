import { Component } from '@angular/core';

@Component({
    selector:'tasty-path-not-found',
    template:`
    <h2>Path Not Found</h2>
    Go Back to <a routerLink="/home" routerLinkActive="active">Home</a>
    `
})

export class PathNotFoundComponent{
    
}