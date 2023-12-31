import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Event } from 'src/app/interfaces/event';
import { Layer } from 'src/app/interfaces/layer';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';



@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrls: ['./parcours.component.css']
})
export class ParcoursComponent {



  constructor(public sharedVariablesService: SharedVariablesService, private router: Router) { }


  titles: Array<string> = ['chez-soi', "District: Bureau d'état civil", "Adoul", "Banque", "Hôpital", "Tribunal", "CMR: site web", "CMR: Délégation régionale", "Ecole"];
  titlesBgColors: Array<string> = ['#FFF28C', '#6DE7B6', '#7ED3FC', '#C5B5FC', '#FEB974', '#904C77', "#0B7189", '#03045E', '#CEB5A7'];
  titlesColors: Array<string> = ['#80690B', '#0F7950', '#045884', '#4D2892', '#91390B', '#5E314D', '#063F4B', '#010114', '#B6917C'];
  containerBgColors: Array<string> = ['#FFFAC2', '#D0FAE4', '#E1F3FF', '#EEEBFF', '#FFEDD5', '#B979A1', '#12BCE2', '#0608B2', '#F0E9E5'];
  CNIEArray: Array<string> = ["défunt"];
  RIBArray: Array<string> = [];
  acteDeNaissanceArray: Array<string> = [];
  attestationScolariteArray: Array<string> = [];
  rapportMedicalArray: Array<string> = [];
  celibatArray: Array<string> = [];
  acteMariageArray: Array<string> = [];
  jugementArray: Array<string> = [];
  nonEmploiArray: Array<string> = [];
  displayedLayerIndices: number[] = [];
  marginsIndices: number[] = [];

  exportingPDF = false;



  // Evenements fixes par emplacement

  //Chez-soi
  CNIE: Event = {
    title: "Photocopie de la CNIE",
    iconColor: this.titlesBgColors[0],
    eventColor: this.titlesColors[0],
    details: ''
  }
  acteDeMariage: Event = {
    title: "Photocopie de l'acte de mariage",
    iconColor: this.titlesBgColors[0],
    eventColor: this.titlesColors[0],
    details: ''
  }

  //Hôpitale
  certifDeDeces: Event = {
    title: "Examen du certificat médicale de décès",
    iconColor: this.titlesBgColors[4],
    eventColor: this.titlesColors[4],
    details: ""
  }
  rapportMedical: Event = {
    title: "Rapport médical et contre visite",
    iconColor: this.titlesBgColors[4],
    eventColor: this.titlesColors[4],
    details: ''
  }

  //District
  acteDeDeces: Event = {
    title: "Extrait de l'acte du décès du défunt(e)",
    iconColor: this.titlesBgColors[1],
    eventColor: this.titlesColors[1],
    details: `Livret de famille ou livret d'identification d'état civil.
  Examen du certifical médicale de décès`
  }
  acteDeNaissance: Event = {
    title: "Extrait de l'acte de naissance",
    iconColor: this.titlesBgColors[1],
    eventColor: this.titlesColors[1],
    details: ''
  }

  //Adoul
  acteHeridite: Event = {
    title: "Acte d'héridité",
    iconColor: this.titlesBgColors[2],
    eventColor: this.titlesColors[2],
    details: `Photocopie de la CNIE ou extrait d'acte de naissance de chaque héritié.
  Acte du décès.
  Photocopie de(s) acte(s) de mariage de défunt(e) et son(ses) conjoint(es).
  12 témoins de sexe masculin`
  }

  //Tribunal
  jugement: Event = {
    title: "Copie du jugement de tutelle et Certificat de non opposition, appel ou cassation.",
    iconColor: this.titlesBgColors[5],
    eventColor: this.titlesColors[5],
    details: ''
  }

  //Ecole
  attestationScolarite: Event = {
    title: "Attestation de scolarité",
    iconColor: this.titlesBgColors[8],
    eventColor: this.titlesColors[8],
    details: ''
  }

  //Banque
  rib: Event = {
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
    details: 'Téléchargeable depuis le site web de la CMR sous le nom "Formulaire de réversion", cliquer pour se diriger vers le site'
  }
  declarationCelibat: Event = {
    title: "Déclaration sur l'honneur du célibat datée et signée",
    iconColor: this.titlesBgColors[6],
    eventColor: this.titlesColors[6],
    details: ''
  }
  declarationNonEmploi: Event = {
    title: "Déclaration sur l'honneur de non emploi datée et signée",
    iconColor: this.titlesBgColors[6],
    eventColor: this.titlesColors[6],
    details: ''
  }

  //CMR: Délégation régionale
  depot: Event = {
    title: 'Dépot du dossier de révérsion',
    iconColor: this.titlesBgColors[7],
    eventColor: this.titlesColors[7],
    details: 'Déposer le dossier de réversion avec tous les documents préparer dans les étapes précédentes'
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
        [
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
        [this.acteDeDeces
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

  ngOnInit(): void {
    this.updateLayers();
  }


  //Fonction pour mettre à jour les événements des emplacements
  updateLayers() {
    // Cas d'un conjoint femelle

    if (this.sharedVariablesService.partnerSexe === 'femelle') {
      // Cas d'un conjoint femelle still partner
      if (this.sharedVariablesService.isStillPartner === true) {
        let declarationNonRemariage: Event = {
          title: "Déclaration sur l'honneur de non remariage.",
          iconColor: this.titlesBgColors[6],
          eventColor: this.titlesColors[6],
          details: `Déclaration sur l'honneur de non remariage depuis la date du décès du défunt datée et signée portant le nom de la veuve.
          Téléchargeable depuis le site web de la CMR sous le nom 'Déclaration sur l'honneur du non remariage', cliquer pour se diriger vers le site`
        }

        this.layers[7].eventsLists[0].push(declarationNonRemariage);
        this.CNIEArray.push("veuve");
        this.acteMariageArray.push("veuve");

        if (this.sharedVariablesService.hasChildren === true) {

          // la veuve a de la pension s'il a au moins un enfant
          if (this.RIBArray.includes('veuve') === false) {
            this.RIBArray.push('veuve');
          }

          for (let child of this.sharedVariablesService.children) {
            const age = this.calculateAge(child.dateOfBirth);
            if (age < 16) {
              this.acteDeNaissanceArray.push(child.name);
              if (child.isInfirm === true) {
                this.rapportMedicalArray.push(child.name);
              }
            }
            else if (age < 18) {
              this.acteDeNaissanceArray.push(child.name);
              if (child.isCurrentlyStudying === true) {
                this.attestationScolariteArray.push(child.name)
              }
              if (child.isInfirm === true) {
                this.rapportMedicalArray.push(child.name);
                if (!this.nonEmploiArray.includes(child.name)) {
                  this.nonEmploiArray.push(child.name);
                }
              }
            }
            else if (age < 21) {
              this.CNIEArray.push(child.name);
              if (child.isCurrentlyStudying === true) {
                this.attestationScolariteArray.push(child.name);
                if (child.marialStatus === 'non marié') {
                  this.celibatArray.push(child.name);
                  if (child.isInfirm === true) {
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                    switch (child.infirmityType) {
                      case 'physique':
                        if (this.RIBArray.includes(child.name) === false) {
                          this.RIBArray.push(child.name);
                        }
                        break;
                      case 'mentale':
                        if (this.RIBArray.includes('veuve') === false) {
                          this.RIBArray.push('veuve');
                        }
                        break;
                    }
                  }
                  else {
                    if (this.RIBArray.includes(child.name) === false) {
                      this.RIBArray.push(child.name);
                    }
                  }
                }
                else if (child.marialStatus === 'marié') {
                  this.acteMariageArray.push(child.name);
                  if (child.isInfirm === true) {
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                  }
                }
              }
              else if (child.isCurrentlyStudying === false) {
                if (child.marialStatus === 'non marié') {
                  this.celibatArray.push(child.name);
                  if (child.isInfirm === true) {
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                    switch (child.infirmityType) {
                      case 'physique':
                        if (this.RIBArray.includes(child.name) === false) {
                          this.RIBArray.push(child.name);
                        }
                        break;
                      case 'mentale':
                        if (this.RIBArray.includes('veuve') === false) {
                          this.RIBArray.push('veuve');
                        }
                        break;
                    }
                  }

                }
                else if (child.marialStatus === 'marié') {
                  this.acteMariageArray.push(child.name);
                  if (child.isInfirm === true) {
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                  }
                }

              }
            }
            else {
              this.CNIEArray.push(child.name);
              if (child.isInfirm === true) {
                if (child.marialStatus === 'non marié') {
                  this.celibatArray.push(child.name);
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                  switch (child.infirmityType) {
                    case 'physique':
                      if (this.RIBArray.includes(child.name) === false) {
                        this.RIBArray.push(child.name);
                      }
                      break;
                    case 'mentale':
                      if (this.RIBArray.includes('veuve') === false) {
                        this.RIBArray.push('veuve');
                      }
                      break;
                  }

                }
                else if (child.marialStatus === 'marié') {
                  if (child.isInfirm === true) {
                    this.acteMariageArray.push(child.name);
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                  }
                }
              }
            }
          }
        }
        else if (this.sharedVariablesService.isValidMarriagePeriod === true) {
          if (this.RIBArray.includes('veuve') === false) {
            this.RIBArray.push('veuve');
          }
        }
      }
      // Cas d'un conjoint femelle no longer partner
      else if (this.sharedVariablesService.isStillPartner === false) {
        // Cas divorcée
        if (this.sharedVariablesService.partnerMarialStatus === 'Divorcée') {
          let acteDivorce: Event = {
            title: "Copie de l'acte de divorce.",
            iconColor: this.titlesBgColors[0],
            eventColor: this.titlesColors[0],
            details: ``
          }
          this.layers[0].eventsLists[0].push(acteDivorce);
          this.CNIEArray.push('Ex-conjointe');
          if (this.sharedVariablesService.hasChildren === true) {
            for (let child of this.sharedVariablesService.children) {
              const age = this.calculateAge(child.dateOfBirth);
              if (age < 16) {
                this.acteDeNaissanceArray.push(child.name);
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                }
                if (!this.jugementArray.includes(child.name)) {
                  this.jugementArray.push(child.name)
                }
                if (this.RIBArray.includes('Ex-conjointe') === false) {
                  this.RIBArray.push('Ex-conjointe');
                }

              }
              else if (age < 18) {
                this.acteDeNaissanceArray.push(child.name);
                if (child.isCurrentlyStudying === true) {
                  this.attestationScolariteArray.push(child.name)
                  if (!this.jugementArray.includes(child.name)) {
                    this.jugementArray.push(child.name)
                  }
                  if (this.RIBArray.includes('Ex-conjointe') === false) {
                    this.RIBArray.push('Ex-conjointe');
                  }
                }
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                  if (!this.jugementArray.includes(child.name)) {
                    this.jugementArray.push(child.name)
                  }
                  if (this.RIBArray.includes('Ex-conjointe') === false) {
                    this.RIBArray.push('Ex-conjointe');
                  }
                }
              }
              else if (age < 21) {
                this.CNIEArray.push(child.name);
                if (child.isCurrentlyStudying === true) {
                  this.attestationScolariteArray.push(child.name);
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                      switch (child.infirmityType) {
                        case 'physique':
                          if (this.RIBArray.includes(child.name) === false) {
                            this.RIBArray.push(child.name);
                          }
                          break;
                        case 'mentale':
                          if (!this.jugementArray.includes(child.name)) {
                            this.jugementArray.push(child.name)
                          }
                          if (this.RIBArray.includes('Ex-conjointe') === false) {
                            this.RIBArray.push('Ex-conjointe');
                          }
                          break;
                      }
                    }
                    else {
                      if (this.RIBArray.includes(child.name) === false) {
                        this.RIBArray.push(child.name);
                      }
                    }
                  }
                  else if (child.marialStatus === 'marié') {
                    this.acteMariageArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }
                }
                else if (child.isCurrentlyStudying === false) {
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                      switch (child.infirmityType) {
                        case 'physique':
                          if (this.RIBArray.includes(child.name) === false) {
                            this.RIBArray.push(child.name);
                          }
                          break;
                        case 'mentale':
                          if (!this.jugementArray.includes(child.name)) {
                            this.jugementArray.push(child.name)
                          }
                          if (this.RIBArray.includes('Ex-conjointe') === false) {
                            this.RIBArray.push('Ex-conjointe');
                          }
                          break;
                      }
                    }

                  }
                  else if (child.marialStatus === 'marié') {
                    this.acteMariageArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }

                }
              }
              else {
                this.CNIEArray.push(child.name);
                if (child.isInfirm === true) {
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                    switch (child.infirmityType) {
                      case 'physique':
                        if (this.RIBArray.includes(child.name) === false) {
                          this.RIBArray.push(child.name);
                        }
                        break;
                      case 'mentale':
                        if (!this.jugementArray.includes(child.name)) {
                          this.jugementArray.push(child.name)
                        }
                        if (this.RIBArray.includes('Ex-conjointe') === false) {
                          this.RIBArray.push('Ex-conjointe');
                        }
                        break;
                    }

                  }
                  else if (child.marialStatus === 'marié') {
                    if (child.isInfirm === true) {
                      this.acteMariageArray.push(child.name);
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }
                }
              }
            }

          }
        }

        // Cas remariée
        if (this.sharedVariablesService.partnerMarialStatus === 'Remariée') {
          let acteRemariage: Event = {
            title: "Copie de l'acte de deuxième mariage.",
            iconColor: this.titlesBgColors[0],
            eventColor: this.titlesColors[0],
            details: ``
          }
          this.layers[0].eventsLists[0].push(acteRemariage);
          this.CNIEArray.push('Ex-conjointe');
          if (this.sharedVariablesService.hasChildren === true) {
            for (let child of this.sharedVariablesService.children) {
              const age = this.calculateAge(child.dateOfBirth);
              if (age < 16) {
                this.acteDeNaissanceArray.push(child.name);
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                }
                if (!this.jugementArray.includes(child.name)) {
                  this.jugementArray.push(child.name)
                }
                if (this.RIBArray.includes('Ex-conjointe') === false) {
                  this.RIBArray.push('Ex-conjointe');
                }

              }
              else if (age < 18) {
                this.acteDeNaissanceArray.push(child.name);
                if (child.isCurrentlyStudying === true) {
                  this.attestationScolariteArray.push(child.name)
                  if (!this.jugementArray.includes(child.name)) {
                    this.jugementArray.push(child.name)
                  }
                  if (this.RIBArray.includes('Ex-conjointe') === false) {
                    this.RIBArray.push('Ex-conjointe');
                  }
                }
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                  if (!this.jugementArray.includes(child.name)) {
                    this.jugementArray.push(child.name)
                  }
                  if (this.RIBArray.includes('Ex-conjointe') === false) {
                    this.RIBArray.push('Ex-conjointe');
                  }
                }
              }
              else if (age < 21) {
                this.CNIEArray.push(child.name);
                if (child.isCurrentlyStudying === true) {
                  this.attestationScolariteArray.push(child.name);
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                      switch (child.infirmityType) {
                        case 'physique':
                          if (this.RIBArray.includes(child.name) === false) {
                            this.RIBArray.push(child.name);
                          }
                          break;
                        case 'mentale':
                          if (!this.jugementArray.includes(child.name)) {
                            this.jugementArray.push(child.name)
                          }
                          if (this.RIBArray.includes('Ex-conjointe') === false) {
                            this.RIBArray.push('Ex-conjointe');
                          }
                          break;
                      }
                    }
                    else {
                      if (this.RIBArray.includes(child.name) === false) {
                        this.RIBArray.push(child.name);
                      }
                    }
                  }
                  else if (child.marialStatus === 'marié') {
                    this.acteMariageArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }
                }
                else if (child.isCurrentlyStudying === false) {
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                      switch (child.infirmityType) {
                        case 'physique':
                          if (this.RIBArray.includes(child.name) === false) {
                            this.RIBArray.push(child.name);
                          }
                          break;
                        case 'mentale':
                          if (!this.jugementArray.includes(child.name)) {
                            this.jugementArray.push(child.name)
                          }
                          if (this.RIBArray.includes('Ex-conjointe') === false) {
                            this.RIBArray.push('Ex-conjointe');
                          }
                          break;
                      }
                    }

                  }
                  else if (child.marialStatus === 'marié') {
                    this.acteMariageArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }

                }
              }
              else {
                this.CNIEArray.push(child.name);
                if (child.isInfirm === true) {
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                    switch (child.infirmityType) {
                      case 'physique':
                        if (this.RIBArray.includes(child.name) === false) {
                          this.RIBArray.push(child.name);
                        }
                        break;
                      case 'mentale':
                        if (!this.jugementArray.includes(child.name)) {
                          this.jugementArray.push(child.name)
                        }
                        if (this.RIBArray.includes('Ex-conjointe') === false) {
                          this.RIBArray.push('Ex-conjointe');
                        }
                        break;
                    }

                  }
                  else if (child.marialStatus === 'marié') {
                    if (child.isInfirm === true) {
                      this.acteMariageArray.push(child.name);
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    // Cas d'un conjoint mâle
    else if (this.sharedVariablesService.partnerSexe === 'male') {
      // Cas d'un conjoint male still partner
      if (this.sharedVariablesService.isStillPartner === true) {
        let declarationNonRemariage: Event = {
          title: "Déclaration sur l'honneur de non remariage.",
          iconColor: this.titlesBgColors[6],
          eventColor: this.titlesColors[6],
          details: `Déclaration sur l'honneur de non remariage depuis la date du décès du défunt datée et signée portant le nom du veuf.
          Téléchargeable depuis le site web de la CMR sous le nom 'Déclaration sur l'honneur du non remariage', cliquer pour se diriger vers le site`
        }

        this.layers[7].eventsLists[0].push(declarationNonRemariage);
        this.CNIEArray.push("veuf");
        this.acteMariageArray.push("veuf");
        if (this.sharedVariablesService.isPartnerInfirm === true) {
          this.rapportMedicalArray.push('veuf');
          if (this.RIBArray.includes('veuf') === false) {
            this.RIBArray.push('veuf');
          }
        }
        else if (this.sharedVariablesService.isPartnerRetired === true) {
          if (this.RIBArray.includes('veuf') === false) {
            this.RIBArray.push('veuf');
          }
        }
        if (this.sharedVariablesService.hasChildren === true) {
          for (let child of this.sharedVariablesService.children) {
            const age = this.calculateAge(child.dateOfBirth);
            if (age < 16) {
              this.acteDeNaissanceArray.push(child.name);
              if (this.RIBArray.includes('veuf') === false) {
                this.RIBArray.push('veuf');
              }
              if (child.isInfirm === true) {
                this.rapportMedicalArray.push(child.name);
              }
            }
            else if (age < 18) {
              this.acteDeNaissanceArray.push(child.name);
              if (child.isCurrentlyStudying === true) {
                this.attestationScolariteArray.push(child.name)
                if (this.RIBArray.includes('veuf') === false) {
                  this.RIBArray.push('veuf');
                }
              }
              if (child.isInfirm === true) {
                if (this.RIBArray.includes('veuf') === false) {
                  this.RIBArray.push('veuf');
                }
                this.rapportMedicalArray.push(child.name);
                if (!this.nonEmploiArray.includes(child.name)) {
                  this.nonEmploiArray.push(child.name);
                }
              }
            }
            else if (age < 21) {
              this.CNIEArray.push(child.name);
              if (child.isCurrentlyStudying === true) {
                this.attestationScolariteArray.push(child.name);
                if (child.marialStatus === 'non marié') {
                  this.celibatArray.push(child.name);
                  if (child.isInfirm === true) {
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                    switch (child.infirmityType) {
                      case 'physique':
                        if (this.RIBArray.includes(child.name) === false) {
                          this.RIBArray.push(child.name);
                        }
                        break;
                      case 'mentale':
                        if (this.RIBArray.includes('veuf') === false) {
                          this.RIBArray.push('veuf');
                        }
                        break;
                    }
                  }
                  else {
                    if (this.RIBArray.includes(child.name) === false) {
                      this.RIBArray.push(child.name);
                    }
                  }
                }
                else if (child.marialStatus === 'marié') {
                  this.acteMariageArray.push(child.name);
                  if (child.isInfirm === true) {
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                  }
                }
              }
              else if (child.isCurrentlyStudying === false) {
                if (child.marialStatus === 'non marié') {
                  this.celibatArray.push(child.name);
                  if (child.isInfirm === true) {
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                    switch (child.infirmityType) {
                      case 'physique':
                        if (this.RIBArray.includes(child.name) === false) {
                          this.RIBArray.push(child.name);
                        }
                        break;
                      case 'mentale':
                        if (this.RIBArray.includes('veuf') === false) {
                          this.RIBArray.push('veuf');
                        }
                        break;
                    }
                  }

                }
                else if (child.marialStatus === 'marié') {
                  this.acteMariageArray.push(child.name);
                  if (child.isInfirm === true) {
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                  }
                }

              }
            }
            else {
              this.CNIEArray.push(child.name);
              if (child.isInfirm === true) {
                this.rapportMedicalArray.push(child.name);
                if (!this.nonEmploiArray.includes(child.name)) {
                  this.nonEmploiArray.push(child.name);
                }
                if (child.marialStatus === 'non marié') {
                  this.celibatArray.push(child.name);
                  switch (child.infirmityType) {
                    case 'physique':
                      if (this.RIBArray.includes(child.name) === false) {
                        this.RIBArray.push(child.name);
                      }
                      break;
                    case 'mentale':
                      if (this.RIBArray.includes('veuf') === false) {
                        this.RIBArray.push('veuf');
                      }
                      break;
                  }

                }
                else if (child.marialStatus === 'marié') {
                  if (child.isInfirm === true) {
                    this.acteMariageArray.push(child.name);

                  }
                }
              }
            }
          }
        }
      }
      // Cas d'un conjoint male no longer partner
      else if (this.sharedVariablesService.isStillPartner === false) {
        // Cas divorcé
        if (this.sharedVariablesService.partnerMarialStatus === 'Divorcé') {
          let acteDivorce: Event = {
            title: "Copie de l'acte de divorce.",
            iconColor: this.titlesBgColors[0],
            eventColor: this.titlesColors[0],
            details: ``
          }
          this.layers[0].eventsLists[0].push(acteDivorce);
          this.CNIEArray.push('Ex-conjoint');
          if (this.sharedVariablesService.hasChildren === true) {
            for (let child of this.sharedVariablesService.children) {
              const age = this.calculateAge(child.dateOfBirth);
              if (age < 16) {
                this.acteDeNaissanceArray.push(child.name);
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                }
                if (!this.jugementArray.includes(child.name)) {
                  this.jugementArray.push(child.name)
                }
                if (this.RIBArray.includes('Ex-conjoint') === false) {
                  this.RIBArray.push('Ex-conjoint');
                }

              }
              else if (age < 18) {
                this.acteDeNaissanceArray.push(child.name);
                if (child.isCurrentlyStudying === true) {
                  this.attestationScolariteArray.push(child.name)
                  if (!this.jugementArray.includes(child.name)) {
                    this.jugementArray.push(child.name)
                  }
                  if (this.RIBArray.includes('Ex-conjoint') === false) {
                    this.RIBArray.push('Ex-conjoint');
                  }
                }
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                  if (!this.jugementArray.includes(child.name)) {
                    this.jugementArray.push(child.name)
                  }
                  if (this.RIBArray.includes('Ex-conjoint') === false) {
                    this.RIBArray.push('Ex-conjoint');
                  }
                }
              }
              else if (age < 21) {
                this.CNIEArray.push(child.name);
                if (child.isCurrentlyStudying === true) {
                  this.attestationScolariteArray.push(child.name);
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                      switch (child.infirmityType) {
                        case 'physique':
                          if (this.RIBArray.includes(child.name) === false) {
                            this.RIBArray.push(child.name);
                          }
                          break;
                        case 'mentale':
                          if (!this.jugementArray.includes(child.name)) {
                            this.jugementArray.push(child.name)
                          }
                          if (this.RIBArray.includes('Ex-conjoint') === false) {
                            this.RIBArray.push('Ex-conjoint');
                          }
                          break;
                      }
                    }
                    else {
                      if (this.RIBArray.includes(child.name) === false) {
                        this.RIBArray.push(child.name);
                      }
                    }
                  }
                  else if (child.marialStatus === 'marié') {
                    this.acteMariageArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }
                }
                else if (child.isCurrentlyStudying === false) {
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                      switch (child.infirmityType) {
                        case 'physique':
                          if (this.RIBArray.includes(child.name) === false) {
                            this.RIBArray.push(child.name);
                          }
                          break;
                        case 'mentale':
                          if (!this.jugementArray.includes(child.name)) {
                            this.jugementArray.push(child.name)
                          }
                          if (this.RIBArray.includes('Ex-conjoint') === false) {
                            this.RIBArray.push('Ex-conjoint');
                          }
                          break;
                      }
                    }

                  }
                  else if (child.marialStatus === 'marié') {
                    this.acteMariageArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }

                }
              }
              else {
                this.CNIEArray.push(child.name);
                if (child.isInfirm === true) {
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                    switch (child.infirmityType) {
                      case 'physique':
                        if (this.RIBArray.includes(child.name) === false) {
                          this.RIBArray.push(child.name);
                        }
                        break;
                      case 'mentale':
                        if (!this.jugementArray.includes(child.name)) {
                          this.jugementArray.push(child.name)
                        }
                        if (this.RIBArray.includes('Ex-conjoint') === false) {
                          this.RIBArray.push('Ex-conjoint');
                        }
                        break;
                    }

                  }
                  else if (child.marialStatus === 'marié') {
                    if (child.isInfirm === true) {
                      this.acteMariageArray.push(child.name);
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        // Cas remarié
        if (this.sharedVariablesService.partnerMarialStatus === 'Remarié') {
          let acteRemariage: Event = {
            title: "Copie de l'acte de deuxième mariage.",
            iconColor: this.titlesBgColors[0],
            eventColor: this.titlesColors[0],
            details: ``
          }
          this.layers[0].eventsLists[0].push(acteRemariage);
          this.CNIEArray.push('Ex-conjoint');
          if (this.sharedVariablesService.hasChildren === true) {
            for (let child of this.sharedVariablesService.children) {
              const age = this.calculateAge(child.dateOfBirth);
              if (age < 16) {
                this.acteDeNaissanceArray.push(child.name);
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                }
                if (!this.jugementArray.includes(child.name)) {
                  this.jugementArray.push(child.name)
                }
                if (this.RIBArray.includes('Ex-conjoint') === false) {
                  this.RIBArray.push('Ex-conjoint');
                }

              }
              else if (age < 18) {
                this.acteDeNaissanceArray.push(child.name);
                if (child.isCurrentlyStudying === true) {
                  this.attestationScolariteArray.push(child.name)
                  if (!this.jugementArray.includes(child.name)) {
                    this.jugementArray.push(child.name)
                  }
                  if (this.RIBArray.includes('Ex-conjoint') === false) {
                    this.RIBArray.push('Ex-conjoint');
                  }
                }
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                  if (!this.jugementArray.includes(child.name)) {
                    this.jugementArray.push(child.name)
                  }
                  if (this.RIBArray.includes('Ex-conjoint') === false) {
                    this.RIBArray.push('Ex-conjoint');
                  }
                }
              }
              else if (age < 21) {
                this.CNIEArray.push(child.name);
                if (child.isCurrentlyStudying === true) {
                  this.attestationScolariteArray.push(child.name);
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                      switch (child.infirmityType) {
                        case 'physique':
                          if (this.RIBArray.includes(child.name) === false) {
                            this.RIBArray.push(child.name);
                          }
                          break;
                        case 'mentale':
                          if (!this.jugementArray.includes(child.name)) {
                            this.jugementArray.push(child.name)
                          }
                          if (this.RIBArray.includes('Ex-conjoint') === false) {
                            this.RIBArray.push('Ex-conjoint');
                          }
                          break;
                      }
                    }
                    else {
                      if (this.RIBArray.includes(child.name) === false) {
                        this.RIBArray.push(child.name);
                      }
                    }
                  }
                  else if (child.marialStatus === 'marié') {
                    this.acteMariageArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }
                }
                else if (child.isCurrentlyStudying === false) {
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                      switch (child.infirmityType) {
                        case 'physique':
                          if (this.RIBArray.includes(child.name) === false) {
                            this.RIBArray.push(child.name);
                          }
                          break;
                        case 'mentale':
                          if (!this.jugementArray.includes(child.name)) {
                            this.jugementArray.push(child.name)
                          }
                          if (this.RIBArray.includes('Ex-conjoint') === false) {
                            this.RIBArray.push('Ex-conjoint');
                          }
                          break;
                      }
                    }

                  }
                  else if (child.marialStatus === 'marié') {
                    this.acteMariageArray.push(child.name);
                    if (child.isInfirm === true) {
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }

                }
              }
              else {
                this.CNIEArray.push(child.name);
                if (child.isInfirm === true) {
                  if (child.marialStatus === 'non marié') {
                    this.celibatArray.push(child.name);
                    this.rapportMedicalArray.push(child.name);
                    if (!this.nonEmploiArray.includes(child.name)) {
                      this.nonEmploiArray.push(child.name);
                    }
                    switch (child.infirmityType) {
                      case 'physique':
                        if (this.RIBArray.includes(child.name) === false) {
                          this.RIBArray.push(child.name);
                        }
                        break;
                      case 'mentale':
                        if (!this.jugementArray.includes(child.name)) {
                          this.jugementArray.push(child.name)
                        }
                        if (this.RIBArray.includes('Ex-conjoint') === false) {
                          this.RIBArray.push('Ex-conjoint');
                        }
                        break;
                    }

                  }
                  else if (child.marialStatus === 'marié') {
                    if (child.isInfirm === true) {
                      this.acteMariageArray.push(child.name);
                      this.rapportMedicalArray.push(child.name);
                      if (!this.nonEmploiArray.includes(child.name)) {
                        this.nonEmploiArray.push(child.name);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    // Cas de conjoint décédé
    else if (this.sharedVariablesService.partnerSexe === null && this.sharedVariablesService.isPartnerAlive === false && this.sharedVariablesService.userRelationship === 'enfant') {
      if (this.sharedVariablesService.hasChildren === true) {
        for (let child of this.sharedVariablesService.children) {
          const age = this.calculateAge(child.dateOfBirth);
          if (age < 16) {
            this.acteDeNaissanceArray.push(child.name);
            if (!this.CNIEArray.includes(`tuteur(rice) de ${child.name}`)) {
              this.CNIEArray.push(`tuteur(rice) de ${child.name}`)
            }
            if (this.RIBArray.includes(`tuteur(rice) de ${child.name}`) === false) {
              this.RIBArray.push(`tuteur(rice) de ${child.name}`);
            }
            if (!this.jugementArray.includes(child.name)) {
              this.jugementArray.push(child.name);
            }
            if (child.isInfirm === true) {
              this.rapportMedicalArray.push(child.name);
            }
          }
          else if (age < 18) {
            this.acteDeNaissanceArray.push(child.name);
            if (child.isCurrentlyStudying === true) {
              this.attestationScolariteArray.push(child.name)
              if (!this.CNIEArray.includes(`tuteur(rice) de ${child.name}`)) {
                this.CNIEArray.push(`tuteur(rice) de ${child.name}`)
              }
              if (this.RIBArray.includes(`tuteur(rice) de ${child.name}`) === false) {
                this.RIBArray.push(`tuteur(rice) de ${child.name}`);
              }
              if (!this.jugementArray.includes(child.name)) {
                this.jugementArray.push(child.name);
              }
            }
            if (child.isInfirm === true) {
              this.rapportMedicalArray.push(child.name);
              if (!this.nonEmploiArray.includes(child.name)) {
                this.nonEmploiArray.push(child.name);
              }
              if (!this.CNIEArray.includes(`tuteur(rice) de ${child.name}`)) {
                this.CNIEArray.push(`tuteur(rice) de ${child.name}`)
              }
              if (this.RIBArray.includes(`tuteur(rice) de ${child.name}`) === false) {
                this.RIBArray.push(`tuteur(rice) de ${child.name}`);
              }
              if (!this.jugementArray.includes(child.name)) {
                this.jugementArray.push(child.name);
              }
            }
          }
          else if (age < 21) {
            this.CNIEArray.push(child.name);
            if (child.isCurrentlyStudying === true) {
              this.attestationScolariteArray.push(child.name);
              if (child.marialStatus === 'non marié') {
                this.celibatArray.push(child.name);
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                  switch (child.infirmityType) {
                    case 'physique':
                      if (this.RIBArray.includes(child.name) === false) {
                        this.RIBArray.push(child.name);
                      }
                      break;
                    case 'mentale':
                      if (!this.CNIEArray.includes(`tuteur(rice) de ${child.name}`)) {
                        this.CNIEArray.push(`tuteur(rice) de ${child.name}`)
                      }
                      if (this.RIBArray.includes(`tuteur(rice) de ${child.name}`) === false) {
                        this.RIBArray.push(`tuteur(rice) de ${child.name}`);
                      }
                      if (!this.jugementArray.includes(child.name)) {
                        this.jugementArray.push(child.name);
                      }
                      break;
                  }
                }
                else {
                  if (this.RIBArray.includes(child.name) === false) {
                    this.RIBArray.push(child.name);
                  }
                }
              }
              else if (child.marialStatus === 'marié') {
                this.acteMariageArray.push(child.name);
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                }
              }
            }
            else if (child.isCurrentlyStudying === false) {
              if (child.marialStatus === 'non marié') {
                this.celibatArray.push(child.name);
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                  switch (child.infirmityType) {
                    case 'physique':
                      if (this.RIBArray.includes(child.name) === false) {
                        this.RIBArray.push(child.name);
                      }
                      break;
                    case 'mentale':
                      if (!this.CNIEArray.includes(`tuteur(rice) de ${child.name}`)) {
                        this.CNIEArray.push(`tuteur(rice) de ${child.name}`)
                      }
                      if (this.RIBArray.includes(`tuteur(rice) de ${child.name}`) === false) {
                        this.RIBArray.push(`tuteur(rice) de ${child.name}`);
                      }
                      if (!this.jugementArray.includes(child.name)) {
                        this.jugementArray.push(child.name);
                      }
                      break;
                  }
                }

              }
              else if (child.marialStatus === 'marié') {
                this.acteMariageArray.push(child.name);
                if (child.isInfirm === true) {
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                }
              }

            }
          }
          else {
            this.CNIEArray.push(child.name);
            if (child.isInfirm === true) {
              if (child.marialStatus === 'non marié') {
                this.celibatArray.push(child.name);
                this.rapportMedicalArray.push(child.name);
                if (!this.nonEmploiArray.includes(child.name)) {
                  this.nonEmploiArray.push(child.name);
                }
                switch (child.infirmityType) {
                  case 'physique':
                    if (this.RIBArray.includes(child.name) === false) {
                      this.RIBArray.push(child.name);
                    }
                    break;
                  case 'mentale':
                    if (!this.CNIEArray.includes(`tuteur(rice) de ${child.name}`)) {
                      this.CNIEArray.push(`tuteur(rice) de ${child.name}`)
                    }
                    if (this.RIBArray.includes(`tuteur(rice) de ${child.name}`) === false) {
                      this.RIBArray.push(`tuteur(rice) de ${child.name}`);
                    }
                    if (!this.jugementArray.includes(child.name)) {
                      this.jugementArray.push(child.name);
                    }
                    break;
                }

              }
              else if (child.marialStatus === 'marié') {
                if (child.isInfirm === true) {
                  this.acteMariageArray.push(child.name);
                  this.rapportMedicalArray.push(child.name);
                  if (!this.nonEmploiArray.includes(child.name)) {
                    this.nonEmploiArray.push(child.name);
                  }
                }
              }
            }
          }
        }
      }
    }

    //Add variables events to layers
    //CNIE
    this.CNIE.details = `Photocopie de la CNIE de ${this.CNIEArray.join(', ')}`
    this.layers[0].eventsLists[0].push(this.CNIE);

    // les RIB
    if (this.RIBArray.length > 0) {
      this.rib.details = `Relevé d'identité bancaire (RIB) ou chèque annulé de ${this.RIBArray.join(', ')}`;
      this.layers[6].eventsLists[0].push(this.rib);
    }

    // Actes de naissance
    if (this.acteDeNaissanceArray.length > 0) {
      this.acteDeNaissance.details = `Extrait de l'acte de naissance de ${this.acteDeNaissanceArray.join(', ')}`
      this.layers[2].eventsLists[0].push(this.acteDeNaissance);
    }

    //Attestations de scolarité
    if (this.attestationScolariteArray.length > 0) {
      this.attestationScolarite.details = `Attestation de scolarité de ${this.attestationScolariteArray.join(', ')}`
      this.layers[5].eventsLists[0].push(this.attestationScolarite);
    }

    //Rapports médicaux
    if (this.rapportMedicalArray.length > 0) {
      this.rapportMedical.details = `Rapport médical et contre visite, homologués par la commission médicale provinciale dont relève lieu de résidence de ${this.rapportMedicalArray.join(', ')}. Téléchargeable depuis le site web de la CMR sous le nom 'Dossier d’infirmité', cliquer pour se diriger vers le site`
      this.layers[1].eventsLists[0].push(this.rapportMedical);
    }

    //Declaration de célibat
    if (this.celibatArray.length > 0) {
      this.declarationCelibat.details = `Déclaration sur l'honneur du célibat datée et signée de ${this.celibatArray.join(', ')}.
      Téléchargeable depuis le site web de la CMR sous le nom 'Déclaration sur l'honneur pour célibat', cliquer pour se diriger vers le site`
      this.layers[7].eventsLists[0].push(this.declarationCelibat);
    }

    //Actes de mariage
    if (this.acteMariageArray.length > 0) {
      this.acteDeMariage.details = `Photocopie de l'acte de mariage de ${this.acteMariageArray.join(', ')}`
      this.layers[0].eventsLists[0].push(this.acteDeMariage);
    }

    //Jugements
    if (this.jugementArray.length > 0) {
      this.jugement.details = `Copie du jugement de tutelle et Certificat de non opposition, appel ou cassation pour ${this.jugementArray.join(', ')}`
      this.layers[4].eventsLists[0].push(this.jugement);
    }

    //Attestation de non emploi
    if (this.nonEmploiArray.length > 0) {
      this.declarationNonEmploi.details = `Déclaration sur l'honneur de non emploi datée et signée de ${this.nonEmploiArray.join(', ')}
      Téléchargeable depuis le site web de la CMR sous le nom 'Déclaration sur l'honneur du non emploi', cliquer pour se diriger vers le site`
      this.layers[7].eventsLists[0].push(this.declarationNonEmploi);
    }
    this.layers.forEach((layer, index) => {
      if (layer.eventsLists[0].length > 0) {
        this.displayedLayerIndices.push(index);
      }
    });
    for (let i = 0; i < this.displayedLayerIndices.length; i++) {
      this.marginsIndices.push(i);
    }
  }


  calculateAge(birthdateString: string | null): number {
    const currentDate = new Date();
    const birthdateParts = birthdateString?.split('/');
    const birthYear = birthdateParts ? parseInt(birthdateParts[2]) : 0;
    const birthMonth = birthdateParts ? parseInt(birthdateParts[1]) - 1 : 0;
    const birthDay = birthdateParts ? parseInt(birthdateParts[0]) : 0;

    const birthdate = new Date(birthYear, birthMonth, birthDay);
    const age = currentDate.getFullYear() - birthdate.getFullYear() - (
      (currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) ? 1 : 0
    );
    return age;
  }

  exportToPDF() {
    this.exportingPDF = true;
    let title: string = 'parcours.pdf';
    let pdf = new jsPDF({
      orientation: 'l',
      unit: 'px',
      format: [5000, 5000],
      putOnlyUsedFonts: false,
    });

    const originalElement = document.getElementById('mainContainer');

    // Get references to the elements within the exportToPDF function
    const el = originalElement?.cloneNode(true) as HTMLElement;

    if (el) {
      el.style.width = '1080px';
      el.id = 'cloned1';

      // Create a container element to hold the cloned elements
      const container = document.createElement('div');
      container.appendChild(el);
      document.body.appendChild(container);

      // Render the content of the element
      html2canvas(el).then((canvas) => {
        const imageData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imageData, 'JPEG', 0, 0, canvas.width, canvas.height);
        pdf.save(title);
        // Remove the container after rendering
        document.body.removeChild(container);
        this.exportingPDF = false;
      });
    } else {
      console.error('Elements not found');
    }
  }



  goToAccueilPage() {
    // Reinitializing variables to mantain the logic
    this.sharedVariablesService.cin = '';
    this.sharedVariablesService.tel = '';
    this.sharedVariablesService.userRelationship = '';
    this.sharedVariablesService.isRetired = null;
    this.sharedVariablesService.hasChildren = null;
    this.sharedVariablesService.isValidMarriagePeriod = null;
    this.sharedVariablesService.children = [];
    this.sharedVariablesService.childOrder = 1;
    this.sharedVariablesService.isStillPartner = null;
    this.sharedVariablesService.isPartnerAlive = null;
    this.sharedVariablesService.isPartnerInfirm = null;
    this.sharedVariablesService.isPartnerRetired = null;
    this.sharedVariablesService.partnerMarialStatus = null;
    this.sharedVariablesService.partnerSexe = null;
    this.router.navigate(['/accueil']);
  }

  goBack() {
    this.router.navigate(['/resultat']);
  }

}
