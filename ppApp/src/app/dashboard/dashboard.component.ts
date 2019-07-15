import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { KJUR, b64utoutf8 } from 'jsrsasign';

import { User, Product } from '../_models/index';
import { UserService, AuthenticationService, ProductsService } from '../_services/index';

import * as AWS from 'aws-sdk/global';


@Component({ templateUrl: 'dashboard.component.html' })
export class DashboardComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private productService: ProductsService,
        private route: ActivatedRoute,
        private location: Location
    ) { }


    users = [];
    products = [];

    // the id_token in the URL
    // Currently not used.
    private expires_in: string;
    token_type: string;

    private decoded_id_token: any;
    private decoded_access_token: any;



    private poolData = {

        UserPoolId: null as string,
        ClientId: null as string
    };

    private authData = {

        ClientId : null as string, // '<TODO: add ClientId>', // Your client id here
        AppWebDomain : null as string, //'<TODO: add App Web Domain>',
        TokenScopesArray : null as string[], //['<TODO: add scope array>'], // e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
        RedirectUriSignIn : null as string, //'<TODO: add redirect url when signed in>',
        RedirectUriSignOut : null as string, //'<TODO: add redirect url when signed out>',
        UserPoolId : null as string, //'<TODO: add UserPoolId>', // Your user pool id here
        AdvancedSecurityDataCollectionFlag : null as boolean, //'<TODO: boolean value indicating whether you want to enable advanced security data collection>', // e.g. true
        Storage: null as any //'<TODO the storage object>' // OPTIONAL e.g. new CookieStorage(), to use the specified storage provided
    };


    ngOnInit() {

        // http://localhost:4200/dashboard#id_token=eyJraWQiOiJFV1wvQjU2aldXYnNKXC8xOUJzZ0pIYmJnUWlcLzZHS0hHXC9nN01VMDVXdHJwYz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiQTBKT1Nmb0tyT1dJLVZVMjZkcXZEdyIsInN1YiI6IjA2MTcxYmZjLTJmODktNDQwOS04YjQzLWIxMjgwYTZlMjUyOSIsIndlYnNpdGUiOiJleGFtcGxlLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhZGRyZXNzIjp7ImZvcm1hdHRlZCI6IjQzMCBIaW5tYW4ifSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfbERaYXNMYzV4IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6IjA2MTcxYmZjLTJmODktNDQwOS04YjQzLWIxMjgwYTZlMjUyOSIsImdpdmVuX25hbWUiOiJSYWZhZWwiLCJtaWRkbGVfbmFtZSI6Ik1pZ3VlbCIsImF1ZCI6IjFlNnExa2tlZ2M1MDhxNGplMXU5bXJocjc4IiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NjMyMDA4MjIsIm5hbWUiOiJSYWZhIiwicGhvbmVfbnVtYmVyIjoiKzE2MTc3MzU2OTg3IiwiZXhwIjoxNTYzMjA0NDIyLCJpYXQiOjE1NjMyMDA4MjIsImVtYWlsIjoicmFmYWVsLmJyYW50bGV5QHNvZnR3YXJlYWdnb3YuY29tIn0.aHN-7J_QoZeY2tQoDL9-_AAyPZs0ukFrvWA9MKCVAuJGpVueESU34it0VKYyQmI18YNKSIPT2-Y7cvKA6FSO-JsLn6JyMvMA_SK-k4er-fw3a4aYjBzpwEuONnK3NZLZAuPQ0Bs83ItWvs6FtwbB8IIsQANdw32YgZtfneo-WmAO0tBsgw6em8hhrDx30_xeR1s0yDDtG1skCGrdqVDYPCx_Pl34v15xF_xINtDvvnbTD7tIDfuVhqkCDQpo4Fi2w0OKtQHrvtXoJYkoyzeVmfkUcCc2GS4cQ-lA-hw9g7dU_BzSD0d9egNPC9P3NBu9NbOojRH6V043Zm_mPwcgFQ&access_token=eyJraWQiOiJ1anVhTWFLSzMxK3lhVzJ3cVBNRklZQ0h2QytmemZUcGxHWExxUnk4Vnp3PSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNjE3MWJmYy0yZjg5LTQ0MDktOGI0My1iMTI4MGE2ZTI1MjkiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNTYzMjAwODIyLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9sRFphc0xjNXgiLCJleHAiOjE1NjMyMDQ0MjIsImlhdCI6MTU2MzIwMDgyMiwidmVyc2lvbiI6MiwianRpIjoiNGI0YjViOWEtOTJkMi00MmYwLTk0ZjgtNTJhNjBjNThmYWQ3IiwiY2xpZW50X2lkIjoiMWU2cTFra2VnYzUwOHE0amUxdTltcmhyNzgiLCJ1c2VybmFtZSI6IjA2MTcxYmZjLTJmODktNDQwOS04YjQzLWIxMjgwYTZlMjUyOSJ9.KAySciY0ks6Rr4rI32tWbbQBSBWeY-rSDAzkcbzdkn-PkvsnrVmjcarxe_JeNwEbuWndcdadMYcR5xO0PzPyrk3tml5_kWAF_h81hu5kEaF8IISlldq83QW65fM6LBWk6AEDintau-jajQOabVLZfuOyNbgxu-yDR6vCwXkES9gk7Jw0gw2pvIPS2xfdD1Wu37KXaVhCrocoZnszEbbQt7S_sYLDisnEY6B5pOwX2oeEiUsomUQQgtEUBKnaZOv6VqhaDEX1Vs9Dz_EcL5eGZn_BnzH11H43CVQHma6ce8IDDj8EydN1XSR3D-0xjCA3_uxkN9v99kckyijOvVKYOg&expires_in=3600&token_type=Bearer

        
        // The Public keys for our user pool
        // Cognito generates two key paris for each pool
        // {"keys":[{"alg":"RS256","e":"AQAB","kid":"EW/B56jWWbsJ/19BsgJHbbgQi/6GKHG/g7MU05Wtrpc=","kty":"RSA","n":"4FeGrqy3p_7EsHGruMzekLZRJxVIzBFRqJ2Ymmn4YKPpFbdd6H_rwEU61pYCVlgjvrXGHoHLGtgcX9G0rr66AMtmcAwklQcmYYSXOAkCCKKu_W5774msP4yP8VrEywBS9OWNSN18U6ufLmpqVQHOOFUEuS6kNzWTjmRcDeeVK5la9KFp-XfYWFIW0g-gpZe6ULttHPb_K9QzzRTMfZBbBSjyAMm_7GvwEfi7j2gtpBxdTeC7QVKzDogStk9iIzitz9d3HBwLRMS1xAPk-8lIwggwlrwIoFHqgaxp8wrGbb9HyptHZaYKC5FQr8RAwxoBoL6-1GcNot9XbNI1E0KrTw","use":"sig"},{"alg":"RS256","e":"AQAB","kid":"ujuaMaKK31+yaW2wqPMFIYCHvC+fzfTplGXLqRy8Vzw=","kty":"RSA","n":"nra2jPAeeXoSSJ8Hvkut0kEbAl-Ar0mAUev5-jfTElkzeOxEXusTYydpQIygNovJPJ8Yd1qJ7vzZl3DxILIjCp5_Uob-JoL-Wy-edLVqEdDCTbJURGznaZA6aXUvz5trupbR4pmsVVZPDRcAqVlFm1pW0rXYfxlksRXJ1MZz6C3Wp_VwY6F7eXGPDYVbcQxg6tYsuPNB8iFN51m0Ez-VWwOEODvIhrdFOc58g-7C7CO6j0BJbm-6Bd4o1wMmu-TmrtS2NNVcqAfofJGxOwQRpCB24R7zGez0ZjuR7o6YiiH-Chv_TfmAGGpvWu52-lC-G4-JaLgUJJCNbq1bPYFzRQ","use":"sig"}]}
        
        // These will always be accessible at "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_lDZasLc5x/.well-known/jwks.json"

        // I also stored them more readibly in "/src/user_pool_public_keys.txt"
        

        var the_url = window.location.href;
    
        var id_token_b64 = the_url.slice(the_url.indexOf('id_token=')+9, the_url.indexOf('access_token=')-1);

        var access_token_b64 = the_url.slice(the_url.indexOf('access_token=')+13, the_url.indexOf('expires_in=')-1);


        this.expires_in = the_url.slice(the_url.indexOf('expires_in=')+11, the_url.indexOf('token_type=')-1);

        this.token_type = the_url.slice(the_url.indexOf('token_type=')+11, the_url.length);


        this.decoded_id_token = this.decode_JWT(id_token_b64);

        this.decoded_access_token = this.decode_JWT(access_token_b64);


        this.location.replaceState("/dashboard");

        /*
        // assigns the values of authData
        this.authData = {

            ClientId: "1e6q1kkegc508q4je1u9mrhr78",
            AppWebDomain: "https://partners-softwareaggov.auth.us-east-1.amazoncognito.com",
            TokenScopesArray: [ "phone", "email", "openid", "aws.cognito.signin.user.admin", "profile" ],
            RedirectUriSignIn: "http://localhost:4200/dashboard",
            RedirectUriSignOut: "https://partners-softwareaggov.auth.us-east-1.amazoncognito.com",
            UserPoolId: "us-east-1_lDZasLc5x",
            AdvancedSecurityDataCollectionFlag: true,
            Storage: null
        };
        */

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


    /*
        Returns:
        {
            headerObj {
                "kid": "...",
                "alg": "..."
            },
            payloadObj {
                "sub": "...",
                ...,
                "email": "..."
            }
        }
    */
    private decode_JWT( JWT: string ) : any {

        var sJWT = JWT;
        var headerObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(sJWT.split(".")[0]));
        var payloadObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(sJWT.split(".")[1]));

       
        return { headerObj, payloadObj };
    }

}
