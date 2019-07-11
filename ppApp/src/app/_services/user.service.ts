import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../_models/user';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable({ providedIn: 'root' })
export class UserService {

    private usersUrl ='api/partners'; // Url to web api

    constructor(private http: HttpClient) { }

    getUsers(): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
}
