import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix-simulation',
  templateUrl: './choix-simulation.component.html',
  styleUrls: ['./choix-simulation.component.css'],
})
export class ChoixSimulationComponent {
  classNamesForTimeline: Array<string> = ['current-item', 'comming', 'comming'];
  constructor(private router: Router) {}
  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }

}
