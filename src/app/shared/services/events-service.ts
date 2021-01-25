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
        let mocked = true;
        let mockserver = 'https://83f528c2-9eba-4a2f-8042-15a0aad0463e.mock.pstmn.io/events/all'
        let server = 'http://localhost:8000/events/all'
        // if (process.env.NODE_ENV === 'production') {
        //     server = 'https://interlink-server.herokuapp.com/events/all';
        // }
        return this.http.get(mocked ? mockserver : server);
    }
    public getActiveEvents() {

    }
}