import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {EventsService} from '../../shared/services/events-service';
@Component({
  selector: 'app-events-browse',
  templateUrl: './events-browse.component.html',
  styleUrls: ['./events-browse.component.css']
})
export class EventsBrowseComponent implements OnInit {

  public allEvents: EventDetails[];
  public currentEvents: EventDetails[];
  public upcomingEvents: EventDetails[];
  public categoryForm: FormControl;

  constructor(private eventsService: EventsService,
    private router: Router) { }

  ngOnInit() {
    this.categoryForm = new FormControl('');
    this.eventsService.getAllEvents().subscribe((response) => {
      this.allEvents = response.data;
      this.filterEvents();
    })
  }

  navigate(event: EventDetails) {
    this.router.navigate(['/event-detail/'+event._id], {state: {data: event}});
  }

  filterEvents() {
    this.currentEvents = this.allEvents.map((event, i) => {
      event.category = i % 2 ? 'Bible Study' : 'Worship';
      return event;
    }).filter(event => {
      const date = new Date(event.date).getDate();
      const today = new Date();
      return date === today.getDate() && event.category === this.categoryForm.value;; 
    });

    this.upcomingEvents = this.allEvents.map((event, i) => {
        event.category = i % 2 ? 'Bible Study' : 'Worship';
        return event;
      }).filter(event => {
        const date = new Date(event.date).getDate();
        const today = new Date();
        return date > today.getDate() && event.category === this.categoryForm.value; 
      });console.log(this.categoryForm)
    // console.log(this.upcomingEvents[0].category)
  }

}
