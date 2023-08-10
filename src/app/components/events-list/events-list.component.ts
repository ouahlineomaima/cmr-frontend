import { Component, Input } from '@angular/core';
import { Event } from 'src/app/interfaces/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  @Input() events: Event[] = [];

}
