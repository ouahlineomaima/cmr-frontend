import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  @Input() events: object[] = [];
  @Input() iconColor: string = "#FFF28C";
  @Input() eventColor: string = "#80690B";
  

}
