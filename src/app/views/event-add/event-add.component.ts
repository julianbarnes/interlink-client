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
  public file: File
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
    console.log(this.file)
    this.eventsService.addEvent(this.eventForm.value, this.file).subscribe((response) => {
      console.log(response)
      alert(JSON.stringify(response))
    })
  }

  fileChosen(event: any) {
    if (event.target.value) {
      this.file = <File>event.target.files[0]
      console.log(event.target.files)
    }
  }

}
