import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//const request = require('request');
import { HttpClient } from '@angular/common/http';
//require('dotenv').config()
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
    constructor(private http: HttpClient) {
    }
    public getEvents(): Observable<any> {
        let server = 'http://localhost:8000/events/all'
        // if (process.env.NODE_ENV === 'production') {
        //     server = 'https://interlink-server.herokuapp.com/events/all';
        // }
        return this.http.get(server);
    }
    public getActiveEvents() {

    }
}