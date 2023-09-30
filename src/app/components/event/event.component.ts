import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event';

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
  @Input() event: Event = {
    title: '',
    iconColor: '',
    eventColor: '',
    details: ''
  }

  openLinkInNewTab(linkUrl: string) {
    window.open(linkUrl, '_blank');
  }
}


