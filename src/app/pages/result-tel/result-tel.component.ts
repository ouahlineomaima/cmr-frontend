import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';

@Component({
  selector: 'app-result-tel',
  templateUrl: './result-tel.component.html',
  styleUrls: ['./result-tel.component.css']
})
export class ResultTelComponent {
goToChoixSimulation() {
  this.router.navigate(['/choix-simulation'])
}

  classNamesForTimeline: Array<string> = ['done', 'done', 'current-item'];

  constructor(private router: Router, public sharedVariablesService: SharedVariablesService) { }



  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }
}
