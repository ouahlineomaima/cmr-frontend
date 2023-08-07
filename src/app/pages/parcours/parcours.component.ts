import { Component } from '@angular/core';


interface layer{
  title:string,
  titleBgColor:string,
  titleColor:string,
  containerBgColor:string
}

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent {

  layers: object[] = [
    {
      title:'chez-soi',
      titleBgColor:'#FFF28C',
      titleColor:'#80690B',
      containerBgColor:'#FFFAC2',
      eventsLists: [
        [{ title: 'event1', details: 'details1' }, { title: 'event2', details: 'details2' }],
        [{ title: 'event3', details: 'details3' }, { title: 'event4', details: 'details4' }]
      ]
    },

    {
      title:'District',
      titleBgColor:'#6DE7B6',
      titleColor:'#0F7950',
      containerBgColor:'#D0FAE4',
      eventsLists: [
        [{ title: 'event11', details: 'details11' }, { title: 'event12', details: 'details12' }],
        [{ title: 'event13', details: 'details13' }, { title: 'event14', details: 'details14' }]
      ]
    }
    
  ]

}
