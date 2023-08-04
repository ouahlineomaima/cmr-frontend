import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent {

  @Input() layerTitle: string = "chez-soi";
  @Input() titleBgColor: string = "#FFF28C";
  @Input() titleColor: string = "#80690B";
  @Input() containerBgColor: string = "#FFFAC2";

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
