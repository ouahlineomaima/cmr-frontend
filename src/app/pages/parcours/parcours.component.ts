import { Component } from '@angular/core';
import { Event } from 'src/app/interfaces/event';
import { Layer } from 'src/app/interfaces/layer';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent {



  titles: Array<string> = ['chez-soi', "District: Bureau d'état civil", "Service notarial", "Banque", "Hôpital", "Tribunal", "CMR: site web", "CMR: Délégation régionale", "Ecole"];
  titlesBgColors: Array<string> = ['#FFF28C', '#6DE7B6', '#7ED3FC', '#C5B5FC', '#FEB974', '#904C77', "#0B7189", '#03045E', '#CEB5A7'];
  titlesColors: Array<string> = ['#80690B', '#0F7950', '#045884', '#4D2892', '#91390B', '#0B7189', '#063F4B', '#010114', '#B6917C'];
  containerBgColors: Array<string> = ['#FFFAC2', '#D0FAE4', '#E1F3FF', '#EEEBFF', '#FFEDD5', '#B979A1', '#12BCE2', '#0608B2', '#F0E9E5'];
  CNIEArray: Array<string> = [];

demandeDeReversion: Event = {
  title: 'Demande de réversion datée et signée',
  iconColor: this.titlesBgColors[6],
  eventColor: this.titlesColors[6],
  details: ''
}

acteDeDeces: Event = {
  title: "Extrait de l'acte du décès du défunt (e)",
  iconColor: this.titlesBgColors[1],
  eventColor: this.titlesColors[1],
  details: `Livret de famille ou livret d'identification d'état civil.
  Examen du certifical médicale de décès.`
}

certifDeDeces: Event = {
  title: "Examen du certifical médicale de décès",
  iconColor: this.titlesBgColors[4],
  eventColor: this.titlesColors[4],
  details: ""
}

CNIE: Event = {
  title: "Photocopie de la CNIE",
  iconColor: this.titlesBgColors[0],
  eventColor: this.titlesColors[0],
  details: `Photocopie de la CNIE de ${this.CNIEArray.join(', ')}`
}


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
