import { Component, OnInit } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';


@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {

    private user: string;

    constructor(

        private cookieMan: CookieService
    ) { }


    ngOnInit() {

        this.user = JSON.parse(this.cookieMan.get("user")).id_token.payload.given_name;
    }
}