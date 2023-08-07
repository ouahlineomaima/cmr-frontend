import { Component, Input } from '@angular/core';
import { event } from '../event/event.component';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  @Input() events: event[] = [];

}
