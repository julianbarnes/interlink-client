import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EventsService } from 'src/app/shared/services/events-service';
import { switchMap } from 'rxjs/operators';
import { EventDetails } from '../../interfaces/event-details'

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  public eventId: string;
  public event: EventDetails;
  public startDate: Date;
  public endDate: Date;
  public dateString: string
  public startTime: string;
  public endTime: string;
  public goingList: string[] = ["Julian Barnes", "Johnathan", "Khamansha", "Jaylen"];
  public commentList: string[] = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."];
  public showGoing: boolean;
  public showComments: boolean;
  public page: string;
  
  constructor(
    private route: ActivatedRoute,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    this.eventsService.getEvents().subscribe((response) => {
      console.log(response)
      this.event = response.data.find(event => event._id === this.eventId);

      //Display the start date
      if( this.event.startDate) {
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date(this.event.startDate));
        const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(this.event.startDate));
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(new Date(this.event.startDate));
        this.dateString = `${mo} ${da} ${ye}`;
      }

      this.startDate = this.event.startDate ? new Date(this.event.startDate) : new Date();
      this.endDate = this.event.endDate ? new Date(this.event.endDate) : new Date();

      //Calculate the start time
      let startHours = this.startDate.getHours() > 12 ? this.startDate.getHours() - 12 : this.startDate.getHours();
      let startMinutes = this.startDate.getMinutes() > 9 ?  this.startDate.getMinutes(): "0" + this.startDate.getMinutes();
      this.startTime = startHours + ":" + startMinutes + (this.startDate.getHours() > 12 ? "pm" : "am");
      //Calculate the end time
      let endHours = this.endDate.getHours() > 12 ? this.endDate.getHours() - 12 : this.endDate.getHours();
      let endMinutes = this.endDate.getMinutes() > 9 ?  this.endDate.getMinutes(): "0" + this.endDate.getMinutes();
      this.endTime = endHours + ":" + endMinutes + (this.endDate.getHours() > 12 ? "pm" : "am");
      
    });  
  }

  clickShowGoing() {
    this.showGoing = !this.showGoing;
  }

  clickShowComments() {
    this.showComments = !this.showComments;
  }

  clickRegister() {
    this.page = "Register";
  }

}
