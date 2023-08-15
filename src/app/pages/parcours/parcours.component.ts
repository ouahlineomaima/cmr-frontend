import { Component } from '@angular/core';
import { Event } from 'src/app/interfaces/event';
import { Layer } from 'src/app/interfaces/layer';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent {

  constructor(public sharedVariablesService: SharedVariablesService) { }

  titles: Array<string> = ['chez-soi', "District: Bureau d'état civil", "Adoul", "Banque", "Hôpital", "Tribunal", "CMR: site web", "CMR: Délégation régionale", "Ecole"];
  titlesBgColors: Array<string> = ['#FFF28C', '#6DE7B6', '#7ED3FC', '#C5B5FC', '#FEB974', '#904C77', "#0B7189", '#03045E', '#CEB5A7'];
  titlesColors: Array<string> = ['#80690B', '#0F7950', '#045884', '#4D2892', '#91390B', '#0B7189', '#063F4B', '#010114', '#B6917C'];
  containerBgColors: Array<string> = ['#FFFAC2', '#D0FAE4', '#E1F3FF', '#EEEBFF', '#FFEDD5', '#B979A1', '#12BCE2', '#0608B2', '#F0E9E5'];
  CNIEArray: Array<string> = ["défunt"];
  RIBArray: Array<string> = [];
  acteDeNaissanceArray: Array<string> = [];


  // Evenements fixes par emplacement

  //Chez-soi
  CNIE: Event = {
    title: "Photocopie de la CNIE",
    iconColor: this.titlesBgColors[0],
    eventColor: this.titlesColors[0],
    details: `Photocopie de la CNIE de ${this.CNIEArray.join(', ')}.`
  }

  //Hôpitale
  certifDeDeces: Event = {
    title: "Examen du certifical médicale de décès",
    iconColor: this.titlesBgColors[4],
    eventColor: this.titlesColors[4],
    details: ""
  }

  //District
  acteDeDeces: Event = {
    title: "Extrait de l'acte du décès du défunt (e)",
    iconColor: this.titlesBgColors[1],
    eventColor: this.titlesColors[1],
    details: `Livret de famille ou livret d'identification d'état civil.
  Examen du certifical médicale de décès.`
  }

  acteDeNaissance: Event = {
    title: "Extrait de l'acte de naissance",
    iconColor: this.titlesBgColors[1],
    eventColor: this.titlesColors[1],
    details: this.acteDeNaissanceArray.length > 0 ? `Extrait de l'acte de naissance de ${this.acteDeNaissanceArray.join(', ')}.` : ""
  }

  //Adoul
  acteHeridite: Event = {
    title: "Acte d'héridité",
    iconColor: this.titlesBgColors[2],
    eventColor: this.titlesColors[2],
    details: `Photocopie de la CNIE ou extrait de naissance de chaque héritié.
  Acte du décès.
  Photocopie de l'acte de mariage pour le veuf et la(les) veuve(s).
  12 témoins de sexe masculin.`
  }

  //Banque
  ribConjoint: Event = {
    title: "Relevé d'identité bancaire (RIB) ou chèque annulé",
    iconColor: this.titlesBgColors[3],
    eventColor: this.titlesColors[3],
    details: ``
  }


  //CMR site web
  demandeDeReversion: Event = {
    title: 'Demande de réversion datée et signée',
    iconColor: this.titlesBgColors[6],
    eventColor: this.titlesColors[6],
    details: 'Cliquer pour télécharger le document depuis le site de la CMR'
  }

  //CMR: Délégation régionale
  depot: Event = {
    title: 'Dépot du dossier de révérsion',
    iconColor: this.titlesBgColors[7],
    eventColor: this.titlesColors[7],
    details: 'Déposer le dossier de réversion avec tous les documents préparer dans les étapes précédentes.'
  }



  // Les emplacements par ordre dans le parcours
  layers: Array<Layer> = [
    // Chez-soi
    {
      title: this.titles[0],
      titleBgColor: this.titlesBgColors[0],
      titleColor: this.titlesColors[0],
      containerBgColor: this.containerBgColors[0],
      eventsLists: [
        [this.CNIE
        ]
      ]
    },

    //Hôpital
    {
      title: this.titles[4],
      titleBgColor: this.titlesBgColors[4],
      titleColor: this.titlesColors[4],
      containerBgColor: this.containerBgColors[4],
      eventsLists: [
        [this.certifDeDeces
        ]
      ]
    },

    //District
    {
      title: this.titles[1],
      titleBgColor: this.titlesBgColors[1],
      titleColor: this.titlesColors[1],
      containerBgColor: this.containerBgColors[1],
      eventsLists: [
        [this.acteDeDeces, this.acteDeNaissance
        ]
      ]
    },

    //Adoul
    {
      title: this.titles[2],
      titleBgColor: this.titlesBgColors[2],
      titleColor: this.titlesColors[2],
      containerBgColor: this.containerBgColors[2],
      eventsLists: [
        [this.acteHeridite
        ]
      ]
    },

    //Tribunal
    {
      title: this.titles[5],
      titleBgColor: this.titlesBgColors[5],
      titleColor: this.titlesColors[5],
      containerBgColor: this.containerBgColors[5],
      eventsLists: [
        [
        ]
      ]
    },

    //Ecole
    {
      title: this.titles[8],
      titleBgColor: this.titlesBgColors[8],
      titleColor: this.titlesColors[8],
      containerBgColor: this.containerBgColors[8],
      eventsLists: [
        [
        ]
      ]
    },

    //Banque
    {
      title: this.titles[3],
      titleBgColor: this.titlesBgColors[3],
      titleColor: this.titlesColors[3],
      containerBgColor: this.containerBgColors[3],
      eventsLists: [
        [
        ]
      ]
    },

    //CMR: site web
    {
      title: this.titles[6],
      titleBgColor: this.titlesBgColors[6],
      titleColor: this.titlesColors[6],
      containerBgColor: this.containerBgColors[6],
      eventsLists: [
        [this.demandeDeReversion
        ]
      ]
    },

    //CMR: délégation
    {
      title: this.titles[7],
      titleBgColor: this.titlesBgColors[7],
      titleColor: this.titlesColors[7],
      containerBgColor: this.containerBgColors[7],
      eventsLists: [
        [this.depot
        ]
      ]
    }
  ]


  






}
