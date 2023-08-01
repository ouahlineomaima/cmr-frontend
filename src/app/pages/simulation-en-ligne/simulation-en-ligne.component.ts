import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SimulationType } from 'src/app/enums/SimulationType';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';
import {ThemePalette} from '@angular/material/core';


interface ChipColor {
  name: string;
  color: ThemePalette;
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

  childrenArray = Array.from({ length: this.sharedVariablesService.childOrder }, (_, index) => index);

  availableSimulationTypes: ChipColor[] = [
    {name: 'En ligne', color: 'primary'},
    {name: 'Téléphonique', color: 'primary'}
  ];

  availableBooleans: ChipColor[] = [
    {name: 'Oui', color: 'primary'},
    {name: 'Non', color: 'primary'}
  ];

  availablePartnerStatesMale: ChipColor[] = [
    {name: 'Divorcé', color: 'primary'},
    {name: 'Remarié', color: 'primary'},
    {name: 'Aucun des cas', color: 'primary'}
  ];
  availablePartnerStatesFemale: ChipColor[] = [
    {name: 'Divorcée', color: 'primary'},
    {name: 'Remariée', color: 'primary'},
    {name: 'Répudiée', color: 'primary'},
    {name: 'Aucun des cas', color: 'primary'}

  ];

  constructor(private router: Router, public sharedVariablesService: SharedVariablesService) {}
  


  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }

  onChipClickHasChildren(chipName: string) {
    this.selectedBooleanHasChildren = this.selectedBooleanHasChildren === chipName ? null : chipName;
    if(this.selectedBooleanHasChildren === 'Oui'){
      this.sharedVariablesService.hasChildren = true;
    }
    else if (this.selectedBooleanHasChildren === 'Non'){
      this.sharedVariablesService.hasChildren = false;
    }
    else{
      this.sharedVariablesService.hasChildren = null;
    }
    
  }

  onChipClickMarriagePeriod(chipName: string) {
    this.selectedIsValidMarriagePeriod = this.selectedIsValidMarriagePeriod === chipName ? null : chipName;
    if(this.selectedIsValidMarriagePeriod === 'Oui'){
      this.sharedVariablesService.isValidMarriagePeriod = true;
    }
    else if (this.selectedIsValidMarriagePeriod === 'Non'){
      this.sharedVariablesService.isValidMarriagePeriod = false;
    }
    else{
      this.sharedVariablesService.isValidMarriagePeriod = null;
    }
    
  }

  onChipClickStillPartner(chipName: string){
    this.selectedIsStillPartner = this.selectedIsStillPartner === chipName ? null : chipName;
    switch(this.selectedIsStillPartner){
      case 'Aucun des cas':
        this.sharedVariablesService.isStillPartner = true;
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

  onChipClickPartnerInfirm(chipName: string){
    this.selectedIsPartnerInfirm = this.selectedIsPartnerInfirm === chipName ? null : chipName;
    if(this.selectedIsPartnerInfirm === 'Oui'){
      this.sharedVariablesService.isPartnerInfirm = true;
    }
    else if (this.selectedIsPartnerInfirm === 'Non'){
      this.sharedVariablesService.isPartnerInfirm= false;
    }
    else{
      this.sharedVariablesService.isPartnerInfirm = null;
    }

  }

  onChipClickPartnerRetired(chipName: string){
    this.selectedIsPartnerRetired = this.selectedIsPartnerRetired === chipName ? null : chipName;
    if(this.selectedIsPartnerRetired === 'Oui'){
      this.sharedVariablesService.isPartnerRetired = true;
    }
    else if (this.selectedIsPartnerRetired === 'Non'){
      this.sharedVariablesService.isPartnerRetired= false;
    }
    else{
      this.sharedVariablesService.isPartnerRetired = null;
    }
    
  }

  updateButtonState() {
    
  }
  declareNewChild(){
    this.childrenArray = new Array(this.sharedVariablesService.childOrder);
    this.childrenArray = Array.from({ length: this.sharedVariablesService.childOrder }, (_, index) => index);
  }

// need to be fixed at the end of all variables
  onSubmit(){
    if(this.sharedVariablesService.simulationType === SimulationType.enLigne && this.sharedVariablesService.isRetired === true){
      this.router.navigate(['/choix-simulation']);
    } 

  }

  goBack(){
    this.router.navigate(['/choix-simulation']);
  }

}
