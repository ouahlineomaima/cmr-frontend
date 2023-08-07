import { Component } from '@angular/core';
import { layer } from 'src/app/components/layer/layer.component';


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

  layers: layer[] = [
    {
      title: this.titles[0],
      titleBgColor:this.titlesBgColors[0],
      titleColor:this.titlesColors[0],
      containerBgColor:this.containerBgColors[0],
      eventsLists: [
        [
          { 
            title: 'event1', 
            iconColor: this.titlesBgColors[0], 
            eventColor: this.titlesColors[0], 
            details: 'details1' },
            { 
              title: 'event2', 
              iconColor: this.titlesBgColors[0], 
              eventColor: this.titlesColors[0], 
              details: 'details2' }

        ],
        [
          { 
            title: 'event11', 
            iconColor: this.titlesBgColors[0], 
            eventColor: this.titlesColors[0], 
            details: 'details11' },
            { 
              title: 'event12', 
              iconColor: this.titlesBgColors[0], 
              eventColor: this.titlesColors[0], 
              details: 'details12' }

        ]
      ]
    },
    {
      title: this.titles[1],
      titleBgColor:this.titlesBgColors[1],
      titleColor:this.titlesColors[1],
      containerBgColor:this.containerBgColors[1],
      eventsLists: [
        [
          { 
            title: 'event1', 
            iconColor: this.titlesBgColors[1], 
            eventColor: this.titlesColors[1], 
            details: 'details1' },
            { 
              title: 'event2', 
              iconColor: this.titlesBgColors[1], 
              eventColor: this.titlesColors[1], 
              details: 'details2' }

        ],
        [
          { 
            title: 'event11', 
            iconColor: this.titlesBgColors[1], 
            eventColor: this.titlesColors[1], 
            details: 'details11' },
            { 
              title: 'event12', 
              iconColor: this.titlesBgColors[1], 
              eventColor: this.titlesColors[1], 
              details: 'details12' }

        ]
      ]
    }
  ]

}
