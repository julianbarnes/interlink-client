import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EventsService } from 'src/app/shared/services/events-service';
@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {
  public eventForm: FormGroup
  constructor(private fb: FormBuilder, private eventsService: EventsService) { }

  ngOnInit() {
    this.eventForm = this.fb.group({
      title: [''],
      description: [''],
      date: [''], 
      picture: ['']
    })
  }

  save() {
    console.log(this.eventForm.value)
    this.eventsService.addEvent(this.eventForm.value).subscribe((response) => {
      console.log(response)
      alert(JSON.stringify(response))
    })
  }

}
