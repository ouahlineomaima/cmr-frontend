import { Component, Input } from '@angular/core';
import { Layer } from 'src/app/interfaces/layer';


@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent {

  @Input() layer: Layer = {
    title: '',
    titleBgColor: '',
    titleColor: '',
    containerBgColor: '',
    eventsLists: []
  }   

}
