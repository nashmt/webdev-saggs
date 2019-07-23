import { Component, OnInit } from '@angular/core';

import { ISHTTPService } from '../_services/ishttp.service';

import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.css']
})

/*
  Cookie Structure:
  {
    at_hash:
    aud:
    auth_time:
    cognito:username:
    email:
    email_verified:
    event_id:
    exp:
    family_name:
    given_name:
    iat:
    iss:
    phone_number:
    phone_number_verified:
    sub:
    token_use:
  }

  Lead Structure:
  {
    results[
      
      {
        Description:
        FirstName:
        Id:
        Industry:
        LastName:
        LeadSource:
        Rating:
        Status:
      }
    ]
  }
*/

export class CreateLeadComponent implements OnInit {


  private content: any;
  

  constructor(

    private http: ISHTTPService,
    private cookieMan: CookieService
  ) { }

  ngOnInit() {
    
    

    // The data stored in the cookie
    var the_token_set = JSON.parse(this.cookieMan.get("user"));
    
    
    var the_lead = {
      "FirstName": the_token_set.id_token.payload.given_name,
      "LastName": the_token_set.id_token.payload.family_name,
      "Company": the_token_set.id_token.payload.email,
      "Email": the_token_set.id_token.payload.email,
      "LeadSource": "Partner Portal",
      "Status": "Live",
      "Industry": "Cyber-Crypto",
      "Rating": "9.9"
    };
    
    
    // the leads currently in Salesforce  
    var the_leads: any;

    // Is this a new lead?
    var new_lead: boolean = true;

    // The Observable to add the new lead if it doesn't exist already
    var post_obs = this.http.post_lead(the_lead);
    
    
    // Gets the leads currently in Salesforce,
    // and adds the new lead if it isn't already there.
    this.http.get_leads().subscribe(

      (data) => {
        the_leads = data;
        console.log(the_leads.results);// .results[0].FirstName);
        

        // Prepares to redirect to the dashboard once the asynchronous operations are complete.
        var the_url: string = window.location.href;

        // takes the token out of the url
        the_url = the_url.split('?')[0];
    
        // will redirect to the dashboard
        the_url = the_url.replace("create-lead", "dashboard");


        for( var i=0; i<the_leads.results.length; i++ ) {

          if( the_token_set.id_token.payload.email == the_leads.results[i].Email ) {

            new_lead = false;
            console.log("duplicate lead!");
          }
        }

        if( new_lead ) {
          post_obs.subscribe(
    
            (data) => {
              console.log("lead created!");
              console.log(data);

              // Redirects to dashboard once lead is created
              window.location.href = the_url;
            }
          );
        }
        else {

          // Redirects to dashboard once we are certain we don't need to create a new lead
          window.location.href = the_url;
        }
      }
    );
  }
}

