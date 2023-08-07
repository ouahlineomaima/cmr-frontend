import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
  @Input() eventTitle: string = "";
  @Input() eventDetails: string = "";
  @Input() iconColor: string = "";

  @Input() showDetailsFlag: boolean = false;
  @Input() detailsStyle: any = {};


}
