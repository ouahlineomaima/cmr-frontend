import { Component } from '@angular/core';
import { ChildActivationEnd, Router } from '@angular/router';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';
import { ThemePalette } from '@angular/material/core';
import { DefuntService } from 'src/app/services/defunt.service';
import { Defunt } from 'src/app/models/defunt';
import { HttpErrorResponse } from '@angular/common/http';
import { EnfantService } from 'src/app/services/enfant.service';
import { Child } from 'src/app/models/child';
import { Enfant } from 'src/app/models/enfant';
import { Conjoint } from 'src/app/models/conjoint';
import { ConjointService } from 'src/app/services/conjoint.service';


interface ChipColor {
  name: string;
  color: ThemePalette;
}

interface Human {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-simulation-en-ligne',
  templateUrl: './simulation-en-ligne.component.html',
  styleUrls: ['./simulation-en-ligne.component.css']
})
export class SimulationEnLigneComponent {
  classNamesForTimeline: Array<string> = ['done', 'current-item', 'comming'];


  selectedBooleanHasChildren: string | null = null;
  selectedIsValidMarriagePeriod: string | null = null;
  selectedIsStillPartner: string | null = null;
  selectedIsPartnerInfirm: string | null = null;
  selectedIsPartnerRetired: string | null = null;
  isButtonDisabled: boolean = true;
  childrenArray: Array<number> | null = Array.from({ length: this.sharedVariablesService.childOrder }, (_, index) => index);
  declaredChildren: number = this.sharedVariablesService.childOrder;



  availableSimulationTypes: ChipColor[] = [
    { name: 'En ligne', color: 'primary' },
    { name: 'Téléphonique', color: 'primary' }
  ];

  availableBooleans: ChipColor[] = [
    { name: 'Oui', color: 'primary' },
    { name: 'Non', color: 'primary' }
  ];

  availablePartnerStatesMale: ChipColor[] = [
    { name: 'Divorcé', color: 'primary' },
    { name: 'Remarié', color: 'primary' },
    { name: 'Aucun des cas', color: 'primary' }
  ];

  availablePartnerStatesFemale: ChipColor[] = [
    { name: 'Divorcée', color: 'primary' },
    { name: 'Remariée', color: 'primary' },
    { name: 'Répudiée', color: 'primary' },
    { name: 'Aucun des cas', color: 'primary' }
  ];

  humans: Human[] = [
    { value: 'male', viewValue: 'Mâle' },
    { value: 'femelle', viewValue: 'Femelle' },
  ];

  constructor(private router: Router, public sharedVariablesService: SharedVariablesService, private defuntService: DefuntService, private enfantService: EnfantService, private conjointService:ConjointService) { }


  // Material UI functions


  onChipClickHasChildren(chipName: string) {
    this.selectedBooleanHasChildren = this.selectedBooleanHasChildren === chipName ? null : chipName;
    if (this.selectedBooleanHasChildren === 'Oui') {
      this.sharedVariablesService.hasChildren = true;
    }
    else if (this.selectedBooleanHasChildren === 'Non') {
      this.sharedVariablesService.hasChildren = false;
    }
    else {
      this.sharedVariablesService.hasChildren = null;
    }
  }

  onChipClickMarriagePeriod(chipName: string) {
    this.selectedIsValidMarriagePeriod = this.selectedIsValidMarriagePeriod === chipName ? null : chipName;
    if (this.selectedIsValidMarriagePeriod === 'Oui') {
      this.sharedVariablesService.isValidMarriagePeriod = true;
    }
    else if (this.selectedIsValidMarriagePeriod === 'Non') {
      this.sharedVariablesService.isValidMarriagePeriod = false;
    }
    else {
      this.sharedVariablesService.isValidMarriagePeriod = null;
    }
    this.sharedVariablesService.isPartnerAlive = true;
  }

  onChipClickStillPartner(chipName: string) {
    this.selectedIsStillPartner = this.selectedIsStillPartner === chipName ? null : chipName;
    this.sharedVariablesService.partnerSexe = this.sharedVariablesService.userRelationship == 'veuve' ? 'femelle' : 'male';
    this.sharedVariablesService.isPartnerAlive = true;
    switch (this.selectedIsStillPartner) {
      case 'Aucun des cas':
        this.sharedVariablesService.isStillPartner = true;
        if (this.sharedVariablesService.partnerSexe === 'femelle') {
          this.sharedVariablesService.partnerMarialStatus = 'veuve';
        }
        else {
          this.sharedVariablesService.partnerMarialStatus = 'veuf';
        }
        break;
      case 'Divorcé':
      case 'Divorcée':
      case 'Remariée':
      case 'Remarié':
      case 'Répudiée':
        this.sharedVariablesService.isStillPartner = false;
        this.sharedVariablesService.partnerMarialStatus = this.selectedIsStillPartner;
        break;
    }
  }

  onChipClickPartnerInfirm(chipName: string) {
    this.selectedIsPartnerInfirm = this.selectedIsPartnerInfirm === chipName ? null : chipName;
    if (this.selectedIsPartnerInfirm === 'Oui') {
      this.sharedVariablesService.isPartnerInfirm = true;
    }
    else if (this.selectedIsPartnerInfirm === 'Non') {
      this.sharedVariablesService.isPartnerInfirm = false;
    }
    else {
      this.sharedVariablesService.isPartnerInfirm = null;
    }
  }

  onChipClickPartnerRetired(chipName: string) {
    this.selectedIsPartnerRetired = this.selectedIsPartnerRetired === chipName ? null : chipName;
    if (this.selectedIsPartnerRetired === 'Oui') {
      this.sharedVariablesService.isPartnerRetired = true;
    }
    else if (this.selectedIsPartnerRetired === 'Non') {
      this.sharedVariablesService.isPartnerRetired = false;
    }
    else {
      this.sharedVariablesService.isPartnerRetired = null;
    }
  }

  onChipClickStillPartnerAlive(chipName: string) {
    this.selectedIsStillPartner = this.selectedIsStillPartner === chipName ? null : chipName;
    if (this.selectedIsStillPartner === 'Oui') {
      this.sharedVariablesService.isPartnerAlive = true;
    }
    else if (this.selectedIsStillPartner === 'Non') {
      this.sharedVariablesService.isPartnerAlive = false;
    }
    else {
      this.sharedVariablesService.isPartnerAlive = null;
    }
  }

  onChipClickStillPartnerChild(chipName: string) {
    this.selectedIsStillPartner = this.selectedIsStillPartner === chipName ? null : chipName;
    switch (this.selectedIsStillPartner) {
      case 'Aucun des cas':
        this.sharedVariablesService.isStillPartner = true;
        if (this.sharedVariablesService.partnerSexe === 'femelle') {
          this.sharedVariablesService.partnerMarialStatus = 'veuve';
        }
        else {
          this.sharedVariablesService.partnerMarialStatus = 'veuf';
        }
        break;
      case 'Divorcé':
      case 'Divorcée':
      case 'Remariée':
      case 'Remarié':
      case 'Répudiée':
        this.sharedVariablesService.isStillPartner = false;
        this.sharedVariablesService.partnerMarialStatus = this.selectedIsStillPartner;
        break;
    }
  }


  // Buttons functions
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

  updateButtonState() {
    this.isButtonDisabled = true;
    if ((this.sharedVariablesService.hasChildren == false && this.sharedVariablesService.isValidMarriagePeriod != null && this.sharedVariablesService.partnerSexe === 'femelle' && this.sharedVariablesService.isStillPartner != null) || (this.sharedVariablesService.hasChildren == false && this.sharedVariablesService.isValidMarriagePeriod != null && this.sharedVariablesService.partnerSexe === 'male' && this.sharedVariablesService.isStillPartner === false) || (this.sharedVariablesService.hasChildren == false && this.sharedVariablesService.isValidMarriagePeriod != null && this.sharedVariablesService.partnerSexe === 'male' && this.sharedVariablesService.isStillPartner === true && this.sharedVariablesService.isPartnerInfirm === false && this.sharedVariablesService.isPartnerRetired != null) || (this.sharedVariablesService.hasChildren == false && this.sharedVariablesService.isValidMarriagePeriod != null && this.sharedVariablesService.partnerSexe === 'male' && this.sharedVariablesService.isStillPartner === true && this.sharedVariablesService.isPartnerInfirm === true) || (this.sharedVariablesService.hasChildren === false && this.sharedVariablesService.userRelationship === 'enfant' && this.sharedVariablesService.isPartnerAlive === false)) {
      this.isButtonDisabled = false;
      return;
    }
    else if (this.sharedVariablesService.hasChildren === true && this.sharedVariablesService.children.length == this.declaredChildren) {
      if ((['Remariée', 'Divorcée', 'Répudiée', 'veuve'].includes((this.sharedVariablesService.partnerMarialStatus) as never) && this.sharedVariablesService.partnerSexe == 'femelle') || (['Remarié', 'Divorcé'].includes((this.sharedVariablesService.partnerMarialStatus) as never) && this.sharedVariablesService.partnerSexe == 'male') || (this.sharedVariablesService.partnerMarialStatus == 'veuf' && this.sharedVariablesService.isPartnerInfirm === true) || (this.sharedVariablesService.partnerMarialStatus == 'veuf' && this.sharedVariablesService.isPartnerRetired != null) || (this.sharedVariablesService.isPartnerAlive === false) || (this.sharedVariablesService.isPartnerAlive === true && this.sharedVariablesService.isPartnerInfirm === true) || (this.sharedVariablesService.isPartnerAlive === true && this.sharedVariablesService.isPartnerInfirm === false && this.sharedVariablesService.isPartnerRetired != null)) {
        this.isButtonDisabled = false;
        return;
      }
    }
  }

  updateChildrenArray() {
    this.declaredChildren--;
    this.childrenArray = new Array(this.declaredChildren);
    this.childrenArray = Array.from({ length: this.declaredChildren }, (_, index) => index);
    return

  }

  declareNewChild() {
    this.declaredChildren++;
    this.childrenArray = new Array(this.declaredChildren);
    this.childrenArray = Array.from({ length: this.declaredChildren }, (_, index) => index);
  }

  onSubmit() {
    let defunt: Defunt = {
      cin: this.sharedVariablesService.cin,
      hasChildren: this.sharedVariablesService.hasChildren,
      retired: this.sharedVariablesService.isRetired
    }
    console.log(defunt)
    this.defuntService.addDefunt(defunt).subscribe(
      (response: Defunt) => {
        console.log(response);
        let conjoint: Conjoint = {
          tel : this.sharedVariablesService.userRelationship !== 'enfant'? this.sharedVariablesService.tel:null,
          hasValidMarriagePeriod: this.sharedVariablesService.hasChildren === true?null:this.sharedVariablesService.isValidMarriagePeriod,
          marialStatus: this.sharedVariablesService.partnerMarialStatus,
          sexe: this.sharedVariablesService.partnerSexe,
          alive: this.sharedVariablesService.isPartnerAlive,
          retired: this.sharedVariablesService.partnerSexe === 'femelle'? null:this.sharedVariablesService.isPartnerRetired,
          infirm: this.sharedVariablesService.partnerSexe === 'femelle'? null: this.sharedVariablesService.isPartnerInfirm

        
        }
        this.conjointService.addConjoint(conjoint, this.sharedVariablesService.cin).subscribe(
          (response: Conjoint) => { console.log(response) },
          (error: HttpErrorResponse) => {
            console.log(error)
          }
        )


        for (let child of this.sharedVariablesService.children) {
          let enfant: Enfant = {
            nom: child.name,
            nomeArabe: null,
            dateOfBirth: child.dateOfBirth,
            infirmityType: child.infirmityType,
            currentlyStudying: child.isCurrentlyStudying,
            infirm: child.isInfirm,
            married: child.marialStatus === 'marié'?true:false
          }
          this.enfantService.addEnfant(enfant, this.sharedVariablesService.cin).subscribe(
            (response: Enfant) => { console.log(response) },
            (error: HttpErrorResponse) => {
              console.log(error)
            }
          )


        }
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    );





    this.router.navigate(['/resultat']);

  }

  goBack() {
    // Reinitializing variables to mantain the logic
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
    this.router.navigate(['/choix-simulation']);
  }

}
