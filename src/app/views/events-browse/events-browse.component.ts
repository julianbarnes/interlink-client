import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../shared/services/events-service';
import { EventDetails } from '../../interfaces/event-details'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  public eventForm: FormGroup

  constructor(private fb: FormBuilder, private eventsService: EventsService,
    private router: Router) { }

  ngOnInit() {
    this.categoryForm = new FormControl('Worship');

    this.eventForm = this.fb.group({
      ageGroup: [''],
      category: ['']
    })
    //Get event works 
    this.eventsService.getEvents().subscribe((response) => {
      this.allEvents = response.data;
      this.filterEvents();
    })

    this.eventForm.controls['ageGroup'].valueChanges.subscribe((value) => {
      this.filterEvents('ageGroup', value)
    })

    this.eventForm.controls['category'].valueChanges.subscribe((value) => {
      this.filterEvents('category', value)
    })
  }

  navigate(event: EventDetails) {
    this.router.navigate(['/event-detail/'+event._id], {state: {data: event}});
  }

  navigateToAdd() {
    this.router.navigate(['events/add']);
  }

  filterEvents(category?: string, value?: string) {
    let today = new Date()
    // console.log(this.allEvents.map(event => typeof event.startDate))
    this.events = this.allEvents
    .filter(event => new Date(event.startDate) > today)
    if(category) {
      this.events = this.events.filter(event => event[category] === value);
    }
}

}
