import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() eventTitle: string = "";
  @Input() eventDetails: string = "";
  @Input() iconColor: string = "";
  @Input() eventColor: string = "";

  


}
