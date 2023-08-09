import { Component, Input } from '@angular/core';
import { event } from '../event/event.component';

export interface layer{
  title: string,
  titleBgColor: string,
  titleColor: string,
  containerBgColor: string,
  eventsLists: Array<Array<event>>,
}

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.css']
})
export class LayerComponent {

  @Input() layer: layer = {
    title: '',
    titleBgColor: '',
    titleColor: '',
    containerBgColor: '',
    eventsLists: []
  }   

}
