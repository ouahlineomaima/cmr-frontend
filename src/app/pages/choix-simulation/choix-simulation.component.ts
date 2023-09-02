import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import { SimulationType } from 'src/app/enums/SimulationType';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';
import { PasDeRetraiteComponent } from '../pas-de-retraite/pas-de-retraite.component';

interface Human {
  value: string;
  viewValue: string;
  
}
interface ChipColor {
  name: string;
  color: ThemePalette;
}

@Component({
  selector: 'app-choix-simulation',
  templateUrl: './choix-simulation.component.html',
  styleUrls: ['./choix-simulation.component.css'],
  
})


export class ChoixSimulationComponent {
  classNamesForTimeline: Array<string> = ['current-item', 'comming', 'comming'];
  selectedSimulationType: string | null = null;
  selectedBooleanIsRetired: string | null = null;
  isButtonDisabled: boolean = true;
  humans: Human[] = [
    {value: 'veuf', viewValue: 'Le veuf'},
    {value: 'veuve', viewValue: 'La veuve'},
    {value: 'enfant', viewValue: 'Le fils / la fille'},
  ];
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

  onChipClick(chipName: string) {
    
    this.selectedSimulationType = this.selectedSimulationType === chipName ? null : chipName;
    this.sharedVariablesService.simulationType = this.selectedSimulationType === 'En ligne' ? SimulationType.enLigne : SimulationType.telephonique;
  }

  onChipClickBoolean(chipName: string) {
    this.selectedBooleanIsRetired = this.selectedBooleanIsRetired === chipName ? null : chipName;
    this.sharedVariablesService.isRetired = this.selectedBooleanIsRetired === 'Oui' ? true : false;
    
  }
  updatePartnerSex(){
    switch(this.sharedVariablesService.userRelationship){
      case 'veuf':
        this.sharedVariablesService.partnerSexe = 'male';
        break;
      case 'veuve':
        this.sharedVariablesService.partnerSexe = 'femelle'
        break;
    }
  }
  updateButtonState() {
    this.isButtonDisabled = !(this.sharedVariablesService.cin && this.sharedVariablesService.tel && this.sharedVariablesService.userRelationship && this.selectedSimulationType && this.selectedBooleanIsRetired);
  }

  onSubmit(){
    if(this.sharedVariablesService.simulationType === SimulationType.enLigne && this.sharedVariablesService.isRetired === true){
      this.router.navigate(['/simulation-en-ligne']);
    } 
    else if(this.sharedVariablesService.simulationType === SimulationType.telephonique && this.sharedVariablesService.isRetired === true){
      this.router.navigate(['/simulation-telephonique'])
    }

    else if(this.sharedVariablesService.simulationType === SimulationType.enLigne && this.sharedVariablesService.isRetired === false){
      this.router.navigate(['/non-retraite']);
    } 

    else if(this.sharedVariablesService.simulationType === SimulationType.telephonique && this.sharedVariablesService.isRetired === false){
      this.router.navigate(['/non-retraite']);
  }



  
  }
}