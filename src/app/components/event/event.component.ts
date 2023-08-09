import { Component, Input } from '@angular/core';

export interface event{
  title:string,
  iconColor:string,
  eventColor: string
  details: string
}

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @Input() event: event = {
    title: '',
    iconColor: '',
    eventColor: '',
    details: ''
  }
}
