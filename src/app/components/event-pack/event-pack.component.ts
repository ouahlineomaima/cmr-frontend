import { Component, Input } from '@angular/core';
import { Event } from 'src/app/interfaces/event';

@Component({
  selector: 'app-event-pack',
  templateUrl: './event-pack.component.html',
  styleUrls: ['./event-pack.component.css']
})
export class EventPackComponent {
  @Input() event: Event = {
    title: '',
    iconColor: '',
    eventColor: '',
    details: ''
  };
  showDetailsFlag: boolean = false;
  detailsStyle: any = {};


  showDetails(event: MouseEvent): void {
    this.showDetailsFlag = true;

    // Get the position of the hovered h3
    const position = (event.target as HTMLElement).getBoundingClientRect();

    // Calculate the top and left position for the details div
    const x = position.x;
    const y = position.y;

    // Set the position of the details div
    this.detailsStyle = {
      'x': `${x}`,
      'y': `${y}`,
    };
  }

  hideDetails(): void {
    this.showDetailsFlag = false;
  }

}
