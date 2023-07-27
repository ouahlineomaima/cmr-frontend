import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-choix-simulation',
  templateUrl: './choix-simulation.component.html',
  styleUrls: ['./choix-simulation.component.css'],
})
export class ChoixSimulationComponent {
  classNamesForTimeline: Array<string> = ['current-item', 'comming', 'comming'];
  cin: string = '';
  constructor(private router: Router) {}
  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }

}
