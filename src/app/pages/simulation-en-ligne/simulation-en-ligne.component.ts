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

  selectedSimulationType: string | null = null;
  selectedBooleanHasChildren: string | null = null;
  isButtonDisabled: boolean = true;

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
  
  onChipClick(chipName: string) {
    
    this.selectedSimulationType = this.selectedSimulationType === chipName ? null : chipName;
    this.sharedVariablesService.simulationType = this.selectedSimulationType === 'En ligne' ? SimulationType.enLigne : SimulationType.telephonique;
  }

  onChipClickBoolean(chipName: string) {
    this.selectedBooleanHasChildren = this.selectedBooleanHasChildren === chipName ? null : chipName;
    this.sharedVariablesService.hasChildren = this.selectedBooleanHasChildren === 'Oui' ? true : false;
    
  }

  updateButtonState() {
    this.isButtonDisabled = !(this.sharedVariablesService.cin && this.sharedVariablesService.tel && this.sharedVariablesService.userRelationship && this.selectedSimulationType && this.selectedBooleanHasChildren);
  }

// need to be fixed at the end of all variables
  onSubmit(){
    if(this.sharedVariablesService.simulationType === SimulationType.enLigne && this.sharedVariablesService.isRetired === true){
      this.router.navigate(['/choix-simulation']);
    } 

  }

}
