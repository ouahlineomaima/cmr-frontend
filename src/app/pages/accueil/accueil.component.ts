import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  goToEligibilitePage() {
    this.router.navigate(['/choix-simulation']);
  }

  constructor(private router: Router) {}
  // navigate to eligibility page on button click event
  goToContactPage() {
    this.router.navigate(['/contact']);
  }

  

}
