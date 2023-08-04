import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() eventTitle: string = "bla bla";
  @Input() iconColor: string = "#FFF28C";
  @Input() eventColor: string = "#80690B";

}
