import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from '../../shared/services/events-service';
import { EventDetails } from '../../interfaces/event-details'

@Component({
  selector: 'app-events-browse',
  templateUrl: './events-browse.component.html',
  styleUrls: ['./events-browse.component.css']
})
export class EventsBrowseComponent implements OnInit {

  public allEvents: EventDetails[];
  public pastEvents: EventDetails[];
  public events: EventDetails[];
  public categoryForm: FormControl;
  public categories: string[] = ['Bible Studies', 'Potluck','Community Development','Sports','Evangelistic','Social'];
  public isAdmin = false;

  constructor(private eventsService: EventsService,
    private router: Router) { }

  ngOnInit() {
    this.categoryForm = new FormControl('Worship');
    //Get event works 
    this.eventsService.getEvents().subscribe((response) => {
      this.allEvents = response.data;
      this.filterEvents();
    })
  }

  navigate(event: EventDetails) {
    this.router.navigate(['/event-detail/'+event._id], {state: {data: event}});
  }

  navigateToAdd() {
    this.router.navigate(['events/add']);
  }

  filterEvents() {
    this.events = this.allEvents
    console.log(this.events.map(event => event.approved))
    // .map((event, i) => {
    //     event.category = i % 2 ? 'Bible Study' : 'Worship';
    //     return event;
    //   }).filter(event => {
    //     const date = new Date(event.date).getDate();
    //     const today = new Date();
    //     return date > today.getDate() && event.category === this.categoryForm.value; 
    //   });console.log(this.categoryForm)
  }

}
