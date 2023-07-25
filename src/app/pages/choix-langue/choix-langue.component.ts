import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choix-langue',
  templateUrl: './choix-langue.component.html',
  styleUrls: ['./choix-langue.component.css']
})
export class ChoixLangueComponent {

  constructor(private router: Router) {}
  // navigate to eligibility page on button click event
  goToAccueilPage() {
    this.router.navigate(['/eligibilite']);
  }
}
