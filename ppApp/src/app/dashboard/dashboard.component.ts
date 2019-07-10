import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, Product } from '../_models/index';
import { UserService, AuthenticationService, ProductsService } from '../_services/index';


@Component({ templateUrl: 'dashboard.component.html' })
export class DashboardComponent implements OnInit {
    currentUser: User;
    users = [];
    products = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private productService: ProductsService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
        this.userService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }
}
