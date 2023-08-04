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

}
