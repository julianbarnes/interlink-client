import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
    private mock_url: string = 'https://83f528c2-9eba-4a2f-8042-15a0aad0463e.mock.pstmn.io';
    private local_url: string = 'http://localhost:8000'
    private prod_url: string = 'https://interlink-server.herokuapp.com';
    private isMock: boolean = true;

    constructor(private http: HttpClient) {
    }
    public getEvents(): Observable<any> {
      let server = this.isMock ? this.mock_url : this.local_url;
      return this.http.get(`${server}/events/all`);
    }
    public getActiveEvents() {
      let server = this.isMock ? this.mock_url : this.local_url;
      return this.http.get(`${server}/events/active`);
    }
}