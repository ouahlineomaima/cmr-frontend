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

  }

  onChipClickPartnerInfirm(chipName: string){

  }

  onChipClickPartnerRetired(chipName: string){
    
  }

  updateButtonState() {
    
  }
  declare(){
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
