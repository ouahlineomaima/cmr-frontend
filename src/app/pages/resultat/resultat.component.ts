import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent {
  childrenPourcentage: number = 0;
  partnerPourcentage: number = 0;
  childrenNames: string[] = [];

  constructor(private router: Router, public sharedVariablesService: SharedVariablesService) { }

  classNamesForTimeline: Array<string> = ['done', 'done', 'current-item'];

  ngOnInit(): void {
    this.getStatus();
  }

  getStatus() {
    // cas de conjoint seul
    if (this.sharedVariablesService.hasChildren != true) {
      if (this.sharedVariablesService.isValidMarriagePeriod === true && this.sharedVariablesService.isStillPartner === true) {
        this.partnerPourcentage = 100;
        return;
      }
      this.partnerPourcentage = 0;
      return;
    }
    else {
      let x: boolean = false; // to know wheter at least one of the children is elligible or not
      // cas des enfants + conjoint
      for (let child of this.sharedVariablesService.children) {
        console.log(child);
        if (child.marialStatus === 'non marié') {
          if (child.isInfirm === true) {
            this.childrenNames.push(child.name);
            x = true
          }
          else {
            const age: number = this.calculateAge(child.dateOfBirth);
            if (age < 16) {
              this.childrenNames.push(child.name);
              x = true
            }
            else if (age < 21 && child.isCurrentlyStudying === true) {
              this.childrenNames.push(child.name);
              x = true
            }
          }
        }
      }

      // traitement de conjoint
      if (this.sharedVariablesService.isStillPartner === true) {
        switch (this.sharedVariablesService.partnerMarialStatus) {
          case 'veuve':
            if (x == true) {
              this.partnerPourcentage = 50;
              this.childrenPourcentage = 50;
            }
            else {
              this.partnerPourcentage = 100;
              this.childrenPourcentage = 0;
            }
            break;
          case 'veuf':
            if (this.sharedVariablesService.isPartnerInfirm === true) {
              if (x == true) {
                this.partnerPourcentage = 50;
                this.childrenPourcentage = 50;
                break;
              }
              else {
                this.partnerPourcentage = 100;
                this.childrenPourcentage = 0;
                break;
              }
            }
            if (this.sharedVariablesService.isPartnerInfirm === false) {
              if (this.sharedVariablesService.isPartnerRetired === true) {
                this.partnerPourcentage = x == true ? 50 : 100;
                this.childrenPourcentage = x == true ? 50 : 0;
              }
              else {
                this.childrenPourcentage = x === true ? 50 : 0;
                this.partnerPourcentage = -1;
                break;
              }
            }
        }
      }
      else {
        this.partnerPourcentage = 0;
        this.childrenPourcentage = x === true ? 100 : 0;
      }
    }
  }

  calculateAge(birthdateString: string | null): number {
    const currentDate = new Date();
    const birthdateParts = birthdateString?.split('/');
    const birthYear = birthdateParts ? parseInt(birthdateParts[2]) : 0;
    const birthMonth = birthdateParts ? parseInt(birthdateParts[1]) - 1 : 0;
    const birthDay = birthdateParts ? parseInt(birthdateParts[0]) : 0;

    const birthdate = new Date(birthYear, birthMonth, birthDay);
    const age = currentDate.getFullYear() - birthdate.getFullYear() - (
      (currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) ? 1 : 0
    );
    return age;
  }

  goToAccueilPage() {
    // Reinitializing variables to mantain the logic
    this.sharedVariablesService.cin = '';
    this.sharedVariablesService.tel = '';
    this.sharedVariablesService.userRelationship = '';
    this.sharedVariablesService.isRetired = null;
    this.sharedVariablesService.hasChildren = null;
    this.sharedVariablesService.isValidMarriagePeriod = null;
    this.sharedVariablesService.children = [];
    this.sharedVariablesService.childOrder = 1;
    this.sharedVariablesService.isStillPartner = null;
    this.sharedVariablesService.isPartnerAlive = null;
    this.sharedVariablesService.isPartnerInfirm = null;
    this.sharedVariablesService.isPartnerRetired = null;
    this.sharedVariablesService.partnerMarialStatus = null;
    this.sharedVariablesService.partnerSexe = null;
    this.router.navigate(['/accueil']);
  }

  goParcours() {
    this.router.navigate(['/parcours']);
  }

  goBack() { // reinitialize variables
    this.router.navigate(['/simulation-en-ligne']);
  }
}
