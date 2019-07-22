import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';


import { UserService } from '../_services/index';


import * as AWS from 'aws-sdk/global';
import { getMaxListeners } from 'cluster';


@Component({ 
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    users = [];
    products = [];


    constructor(
        private userService: UserService
    ) { }



    ngOnInit() {

    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getUsers()
            .pipe(first())
            .subscribe(users => this.users = users);
    }


}
