import { Component } from '@angular/core';
import { Event } from 'src/app/interfaces/event';
import { Layer } from 'src/app/interfaces/layer';


@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent {

  titles: Array<string> = ['chez-soi', 'District'];
  titlesBgColors: Array<string> = ['#FFF28C', '#6DE7B6'];
  titlesColors: Array<string> = ['#80690B', '#0F7950'];
  containerBgColors: Array<string> = ['#FFFAC2', '#D0FAE4'];
  event1: Event = {
    title: 'event1',
    iconColor: this.titlesBgColors[0],
    eventColor: this.titlesColors[0],
    details: 'details1'
  };
  event2: Event = {
    title: 'event2',
    iconColor: this.titlesBgColors[0],
    eventColor: this.titlesColors[0],
    details: 'details2'
  };

  event3: Event = {
    title: 'event11',
    iconColor: this.titlesBgColors[0],
    eventColor: this.titlesColors[0],
    details: 'details11'
  };

  event4: Event = {
    title: 'event12',
    iconColor: this.titlesBgColors[0],
    eventColor: this.titlesColors[0],
    details: 'details12'
  };


  event11: Event = {
    title: 'event1',
    iconColor: this.titlesBgColors[1],
    eventColor: this.titlesColors[1],
    details: 'details1'
  };
  event12: Event = {
    title: 'event2',
    iconColor: this.titlesBgColors[1],
    eventColor: this.titlesColors[1],
    details: 'details2'
  };

  event13: Event = {
    title: 'event11',
    iconColor: this.titlesBgColors[1],
    eventColor: this.titlesColors[1],
    details: 'details11'
  };

  event14: Event = {
    title: 'event12',
    iconColor: this.titlesBgColors[1],
    eventColor: this.titlesColors[1],
    details: 'details12'
  };


  layers: Array<Layer> = [
    {
      title: this.titles[0],
      titleBgColor: this.titlesBgColors[0],
      titleColor: this.titlesColors[0],
      containerBgColor: this.containerBgColors[0],
      eventsLists: [
        [
          this.event1, this.event2

        ],
        [
          this.event3,
          this.event4

        ]
      ]
    },
    {
      title: this.titles[1],
      titleBgColor: this.titlesBgColors[1],
      titleColor: this.titlesColors[1],
      containerBgColor: this.containerBgColors[1],
      eventsLists: [
        [
          this.event11,
          this.event12

        ],
        [
          this.event13,
          this.event14

        ]
      ]
    }
  ]

}
