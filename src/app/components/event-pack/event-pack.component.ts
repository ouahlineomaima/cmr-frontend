import { Component, Input } from '@angular/core';
import { event } from '../event/event.component';

@Component({
  selector: 'app-event-pack',
  templateUrl: './event-pack.component.html',
  styleUrls: ['./event-pack.component.css']
})
export class EventPackComponent {
  @Input() event: event = {
    title: '',
    iconColor: '',
    eventColor: '',
    details: ''
  };
  showDetailsFlag: boolean = false;
  detailsStyle: any = {};


  showDetails(event: MouseEvent): void {
    this.showDetailsFlag = true;
    console.log('layer')

    // Get the position of the hovered h3
    const position = (event.target as HTMLElement).getBoundingClientRect();

    // Calculate the top and left position for the details div
    const top = position.top;
    const left = position.left;

    // Set the position of the details div
    this.detailsStyle = {
      'top': `${top + 30}px`,
      'left': `${left + 20}px`,
    };
  }

  hideDetails(): void {
    this.showDetailsFlag = false;
    console.log('leave')
  }

}
