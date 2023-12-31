import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-pas-de-retraite',
  templateUrl: './pas-de-retraite.component.html',
  styleUrls: ['./pas-de-retraite.component.css'],

})
export class PasDeRetraiteComponent {
goToChoixSimulation() {
  this.router.navigate(['/choix-simulation'])
}
goToAccueilPage() {
  this.router.navigate(['/non-retraite']) 
}
classNamesForTimeline: Array<string> = ['done', 'done', 'current-item'];


  constructor(private router:Router){}
  

  closeDialog(){
    this.router.navigate(["/choix-simulation"])
  }
}
