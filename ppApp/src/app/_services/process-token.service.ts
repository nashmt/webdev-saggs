import { Injectable } from '@angular/core';

import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

import { KJUR, b64utoutf8 } from 'jsrsasign';

import { DatabaseService } from './database.service';

import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ProcessTokenService {

  private _expires_in: string;
  private _token_type: string;

  private _decoded_id_token: any;
  private _decoded_access_token: any;

  constructor(

    private location: Location,
    private route: ActivatedRoute,
    private _database: DatabaseService,
    private cookieMan: CookieService
  ) { 


    this.get_tokens();
  }





  /*
        Returns:
        {
            header {
                "kid": "...",
                "alg": "..."
            },
            payload {
                "sub": "...",
                ...,
                "email": "..."
            }
        }
  */

  get_tokens() {

    

    // The problem here is that the snapshot is happpening before the url gets edited
    // I think you need to use an Observable rather than a snapshot
    // So read up on observables and learn how to use them!
    
    var id_token_b64 = this.route.snapshot.queryParamMap.get('id_token');

    var access_token_b64 = this.route.snapshot.queryParamMap.get('access_token');

    this._expires_in = this.route.snapshot.queryParamMap.get('expires_in');

    this._token_type = this.route.snapshot.queryParamMap.get('token_type');





    this._decoded_id_token = this.decode_JWT(id_token_b64);

    this._decoded_access_token = this.decode_JWT(access_token_b64);

    // We have now decoded and stored the tokens in local variables.



    this.cookieMan.set( "user", JSON.stringify({
      id_token: this._decoded_id_token, 
      access_token: this._decoded_access_token
      }) 
    );
    



    // This is how I was doing it before - maybe I'll have to do it this way again!
    /*
    var id_token_b64 = the_url.slice(the_url.indexOf('id_token=')+9, the_url.indexOf('access_token=')-1);
    var access_token_b64 = the_url.slice(the_url.indexOf('access_token=')+13, the_url.indexOf('expires_in=')-1);
    this._expires_in = the_url.slice(the_url.indexOf('expires_in=')+11, the_url.indexOf('token_type=')-1);
    this._token_type = the_url.slice(the_url.indexOf('token_type=')+11, the_url.length);
    */
  }
 


  private decode_JWT( JWT: string ) : any {

    var sJWT = JWT;
    var header = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(sJWT.split(".")[0]));
    var payload = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(sJWT.split(".")[1]));
   
    return { header, payload };
  }










  get expires_in(): string {

    return this._expires_in;
  }

  get token_type(): string {

    return this._token_type;
  }

  get id_token(): any {

    if( this._decoded_id_token ) {

      return this._decoded_id_token;
    }
    else {
      return "error: run get_tokens() method before attempting to retrieve tokens.";
    }
  }

  get access_token(): any {

    if( this._decoded_access_token ) {

      return this._decoded_access_token;
    }
    else {
      return "error: run get_tokens() method before attempting to retrieve tokens.";
    }
  }


  /*
    The methods above are only for getting the tokens in THIS INSTANCE of "process-token"
    This method is for getting the tokens that have been stored over time in this one persistent instance of InMemoryDataService
  */
  get database() {

    return this._database;
  }
}
