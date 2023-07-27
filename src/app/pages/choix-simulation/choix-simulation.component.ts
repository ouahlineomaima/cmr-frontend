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
  humans: Human[] = [
    {value: 'veuf', viewValue: 'Le veuf'},
    {value: 'veuve', viewValue: 'La veuve'},
    {value: 'enfant', viewValue: 'Le fils / la fille'},
  ];
  availableColors: ChipColor[] = [
    {name: 'En ligne', color: 'primary'},
    {name: 'Téléphonique', color: 'primary'}
  ];
  selectedColor: string | null = null;
  constructor(private router: Router) {}
  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }
  onChipClick(chipName: string) {
    this.selectedColor = this.selectedColor === chipName ? null : chipName;
    this.simulationType = this.selectedColor === 'En ligne' ? SimulationType.enLigne : SimulationType.telephonique;
  }

}
