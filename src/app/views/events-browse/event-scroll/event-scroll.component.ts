import { Component, Input, OnInit } from '@angular/core';
import { EventDetails } from '../../../interfaces/event-details'

@Component({
  selector: 'app-event-scroll',
  templateUrl: './event-scroll.component.html',
  styleUrls: ['./event-scroll.component.css']
})
export class EventScrollComponent implements OnInit {

  @Input() events: EventDetails[];
  @Input() navigateFunction: Function;

  constructor() { }

  ngOnInit() {
  }

  public navigate(val: string) {
    //this.navigateFunction(val)
  }
}
