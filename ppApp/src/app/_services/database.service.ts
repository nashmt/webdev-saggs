import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


/*
  We are using this service as a faux-database for now.
  I think we'll create the instance in the "callback" component.
  And then make it public from there?
*/
export class DatabaseService {

  private _token_sets: any[];

  private id: number;

  constructor() {

    this.createDb();
  }

  createDb() {
    
    this._token_sets = new Array();
    this.id = 0;

    return null;
  }


  push_token_set(token_set: any) {

    
    this._token_sets.push({
    
      id: this.id, 
      token_set: token_set
    });
    

    this.id++;
  }



  // Later, implement, a "get token_set(id: string)" method to get a specific token from the array based on id or something
  get token_sets() {

    return this._token_sets;
  }

  get_token_set(index: number) {

    return this._token_sets[index];
  }
}
