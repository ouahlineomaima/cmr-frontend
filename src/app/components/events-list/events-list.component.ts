import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {

  @Input() events: Event[] = [];

}
