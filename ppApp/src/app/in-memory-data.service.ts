import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './_models/index';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, username: 'matt.nash', password: 'password', firstName: 'Matt', lastName: 'Nash', token: "39204930" },
      { id: 12, username: 'rafa.brantley', password: 'password', firstName: 'Rafael', lastName: 'Brantley', token: "39204930"},

    ];
    return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
