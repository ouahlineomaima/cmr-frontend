import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import { SimulationType } from 'src/app/enums/SimulationType';

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
  cin: string = '';
  tel: string = '';
  userRelationship: string = '';
  simulationType!: SimulationType;
  isRetired: boolean | null = null;
  selectedSimulationType: string | null = null;
  selectedBooleanIsRetired: string | null = null;
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
  
  constructor(private router: Router) {}
  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }
  onChipClick(chipName: string) {
    this.selectedBooleanIsRetired = this.selectedBooleanIsRetired === chipName ? null : chipName;
    this.isRetired = this.selectedBooleanIsRetired === 'Oui' ? true : false;
  }

  onChipClickBoolean(chipName: string) {
    this.selectedSimulationType = this.selectedSimulationType === chipName ? null : chipName;
    this.simulationType = this.selectedSimulationType === 'En ligne' ? SimulationType.enLigne : SimulationType.telephonique;
  }

}
