import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent {

  @Input() layerTitle: string = "";
  @Input() titleBgColor: string = "";
  @Input() titleColor: string = "";
  @Input() containerBgColor: string = "";
  @Input() eventsLists: object[][] = [];

  

}
