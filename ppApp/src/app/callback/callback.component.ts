import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})


/*
  Right now, this component is just the landing page for the Cognito-callback.
  It simply corrects the url parameter-format,
  and immediately redirects to the dashboard component
*/
export class CallbackComponent implements OnInit {

/*
private poolData = {

    UserPoolId: null as string,
    ClientId: null as string
};

private authData = {

    ClientId : null as string, 
    AppWebDomain : null as string, 
    TokenScopesArray : null as string[], // Scope Array - e.g.['phone', 'email', 'profile','openid', 'aws.cognito.signin.user.admin'],
    RedirectUriSignIn : null as string, //'<TODO: add redirect url when signed in>',
    RedirectUriSignOut : null as string, //'<TODO: add redirect url when signed out>',
    UserPoolId : null as string, // Your user pool id here
    AdvancedSecurityDataCollectionFlag : null as boolean, //'<TODO: boolean value indicating whether you want to enable advanced security data collection>', // e.g. true
    Storage: null as any //'<TODO the storage object>' // OPTIONAL e.g. new CookieStorage(), to use the specified storage provided
};

authData = {

    ClientId: "1e6q1kkegc508q4je1u9mrhr78",
    AppWebDomain: "https://partners-softwareaggov.auth.us-east-1.amazoncognito.com",
    TokenScopesArray: [ "phone", "email", "openid", "aws.cognito.signin.user.admin", "profile" ],
    RedirectUriSignIn: "http://localhost:4200/dashboard",
    RedirectUriSignOut: "https://partners-softwareaggov.auth.us-east-1.amazoncognito.com",
    UserPoolId: "us-east-1_lDZasLc5x",
    AdvancedSecurityDataCollectionFlag: true,
    Storage: null
}
*/

  constructor(  ) { }

  
  ngOnInit() {

    var the_url: string = window.location.href;

    the_url = the_url.replace("callback", "callback-buffer");

    window.location.href = the_url.replace('#', '?');
  }

  
}
