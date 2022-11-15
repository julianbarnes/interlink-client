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
    let today = new Date()
    // console.log(this.allEvents.map(event => typeof event.startDate))
    this.events = this.allEvents
    /*.filter(event =>
      //(event.approved || this.isAdmin ) &&
    new Date(event.startDate) > today)*/
}

}
