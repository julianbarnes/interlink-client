import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-categories',
  templateUrl: './event-categories.component.html',
  styleUrls: ['./event-categories.component.css']
})
export class EventCategoriesComponent implements OnInit {
  @Input() categories: [];
  constructor() { }

  ngOnInit() {
  }

}
