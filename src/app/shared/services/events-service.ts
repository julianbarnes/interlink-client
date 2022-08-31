import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventDetails } from 'src/app/interfaces/event-details';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class EventsService {
    private server: string;
    constructor(private http: HttpClient) {
      this.server = environment.url;
    }

    public getEvents(): Observable<any> {

      return this.http.get(`${this.server}/events/all`);
    }
    public getActiveEvents() {

      return this.http.get(`${this.server}/events/active`);
    }
    public addEvent(event: EventDetails) {

      return this.http.post(`${this.server}/events/add`, event)
    }
}