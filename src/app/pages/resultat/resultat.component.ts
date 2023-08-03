import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent {

  constructor(private router: Router) {}

  classNamesForTimeline: Array<string> = ['done', 'done', 'current-item'];
  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }
}
