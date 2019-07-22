import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-create-lead',
  templateUrl: './create-lead.component.html',
  styleUrls: ['./create-lead.component.css']
})

/*
  Cookie Structure:
  {
    address:
    at_hash:
    aud:
    auth_time:
    cognito:username:
    email:
    email_verified:
    event_id:
    exp:
    given_name:
    iat:
    iss:
    middle_name:
    name:
    phone_number:
    phone_number_verified:
    sub:
    token_use:
    website:
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

    private http: HttpClient,
    private cookieMan: CookieService
  ) { }

  ngOnInit() {

    
    var the_headers = new HttpHeaders();

    the_headers.append("Authorization", "Basic " +  btoa("Administrator:manage"));
    the_headers.append('Content-Type', 'application/json');
    
    

    var the_lead = {
      "FirstName":"Rafael",
      "LastName":"Taylor",
      "Company":"SAGGS",
      "LeadSource":"Seminar",
      "Status":"Working",
      "Industry":"Finance",
      "Rating":"5"
    };

    var the_token_set = JSON.parse(this.cookieMan.get("user"));

    
    this.content = the_token_set.id_token.payload;

    console.log(this.content);
    
    
    var live_lead = {
      "FirstName": the_token_set.id_token.payload.given_name,
      "LastName": the_token_set.id_token.payload.given_name,
      "Company": the_token_set.id_token.payload.website,
      "LeadSource": "Partner Portal",
      "Status": "Live",
      "Industry": "Cyber-Crypto",
      "Rating": "9.9"
    };
    

    /*
    this.http.get("https://api.github.com/users/koushikkothagal").subscribe(
      (json) => this.content = json,
      (error) => console.log(error)
      );
    */
    
      
    // Works

    var the_leads: any;

    // Is this a new lead?
    var new_lead: boolean = true;

    var post_obs = this.http.post("https://cors-anywhere.herokuapp.com/http://54.211.12.84:5555/restv2/SFDev.sfrest:createLeadRS/createLeadRS", live_lead, {headers: the_headers});
    
    this.http.get('https://cors-anywhere.herokuapp.com/http://54.211.12.84:5555/restv2/SFDev.sfrest:getSFLeads/getLeads', {headers: the_headers}).subscribe(

      (data) => {
        the_leads = data;
        console.log(the_leads.results);// .results[0].FirstName);
        


        for( var i=0; i<the_leads.results.length; i++ ) {

          if( the_token_set.id_token.payload.given_name == the_leads.results[i].FirstName ) {

            new_lead = false;
            console.log("duplicate lead!");
            console.log( "new_lead set to: " + new_lead );
          }
        }

        if( new_lead ) {
          post_obs.subscribe(
    
            (data) => {
              console.log("lead created!");
              console.log(data);
            }
          );
        }
      }
    );
    
    

    
    
    


    // Done.  Redirect to dashboard


    var the_url: string = window.location.href;

    // takes the token out of the url
    the_url = the_url.split('?')[0];

    // will redirect to the dashboard
    the_url = the_url.replace("create-lead", "dashboard");

    // window.location.href = the_url;
  }


}

