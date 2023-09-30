import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  @Input() event: Event = {
    title: '',
    iconColor: '',
    eventColor: '',
    details: ''
  };
  
  @Input() showDetailsFlag: boolean = false;
  @Input() detailsStyle: any = {};


}
