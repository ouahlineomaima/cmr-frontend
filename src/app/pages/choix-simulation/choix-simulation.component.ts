import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Human {
  value: string;
  viewValue: string;
  
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
  selectedValue: string = '';
  humans: Human[] = [
    {value: 'veuf', viewValue: 'Le veuf'},
    {value: 'veuve', viewValue: 'La veuve'},
    {value: 'enfant', viewValue: 'Le fils / la fille'},
  ];
  constructor(private router: Router) {}
  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }

}
