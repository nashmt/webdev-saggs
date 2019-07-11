import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { User, Product } from '../_models/index';
import { UserService, AuthenticationService, ProductsService } from '../_services/index';


@Component({ templateUrl: 'dashboard.component.html' })
export class DashboardComponent implements OnInit {
    currentUser: User;
    users = [];
    products = [];

    // the id_token in the URL
    // Currently not used.
    private id_token: string;

    private AmazonCognitoIdentity: any;

    private poolData: {

        UserPoolId: string,
        ClientId: string
    };

    // The registered user
    private cognitoUser: any;



    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private productService: ProductsService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {

        this.currentUser = this.authenticationService.currentUserValue;

        this.poolData.UserPoolId = "us-east-1_lDZasLc5x";
        this.poolData.ClientId = "1e6q1kkegc508q4je1u9mrhr78";

        // The identity (what the Identity SDK is all about )
        this.AmazonCognitoIdentity = require('amazon-cognito-identity-js');
        
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

    register_user() {

        // Gets "id_token" from the URL
        // Currently not used.
        this.id_token = this.route.snapshot.queryParamMap.get('id_token');


        var poolData = {
            UserPoolId : '...', // Your user pool id here
            ClientId : '...' // Your client id here
        };
        var userPool = new this.AmazonCognitoIdentity.CognitoUserPool(poolData);
    
        var attributeList = [];
    
        var dataEmail = {
            Name : 'email',
            Value : 'email@mydomain.com'
        };
    
        var dataPhoneNumber = {
            Name : 'phone_number',
            Value : '+15555555555'
        };
        var attributeEmail = new this.AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
        var attributePhoneNumber = new this.AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);
    
        attributeList.push(attributeEmail);
        attributeList.push(attributePhoneNumber);
    
        userPool.signUp('username', 'password', attributeList, null, function(err, result){
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }

            this.cognitoUser = result.user;
            console.log('user name is ' + this.cognitoUser.getUsername());
        });
    }
}
