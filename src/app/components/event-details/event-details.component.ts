import { Component, Input } from '@angular/core';
import { event } from '../event/event.component';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  @Input() event: event = {
    title: '',
    iconColor: '',
    eventColor: '',
    details: ''
  };
  
  @Input() showDetailsFlag: boolean = false;
  @Input() detailsStyle: any = {};


}
