import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-pack',
  templateUrl: './event-pack.component.html',
  styleUrls: ['./event-pack.component.css']
})
export class EventPackComponent {
  @Input() eventTitle: string = "Event1";
  @Input() iconColor: string = "#FFF28C";
  @Input() eventColor: string = "#80690B";

  @Input() eventDetails: string = "lorem ipsum torgdt zatyfgirdhdczc gvgvy ygzqfe<ytfsoqdsds zulyfqds szyugdeiuez dkdeieahzd";
  @Input() showDetailsFlag: boolean = false;
  @Input() detailsStyle: any = {};


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
