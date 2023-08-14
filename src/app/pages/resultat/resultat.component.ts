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
    if (this.sharedVariablesService.hasChildren != true) {
      // cas de conjoint seul
      if (this.sharedVariablesService.isValidMarriagePeriod === true) {
        this.partnerPourcentage = 100;
        return;
      }
      return;
    }
    else {
      let x: boolean = false; // to know wheter at least one of the children is elligible or not
      // cas des enfants
      for (let child of this.sharedVariablesService.children) {
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
              this.partnerPourcentage = 50
            }
            else {
              this.partnerPourcentage = 10
            }
            break;
          case 'Divorcé':
          case 'Divorcée':
          case 'Remariée':
          case 'Remarié':
          case 'Répudiée':
            this.partnerPourcentage = 0;
            break;

          case 'veuf':
            if (this.sharedVariablesService.isPartnerInfirm === true) {
              if (x == true) {
                this.partnerPourcentage = 50
                break;
              }
              else {
                this.partnerPourcentage = 100
                break;
              }
            }
            if (this.sharedVariablesService.isPartnerInfirm === false) {
              if (this.sharedVariablesService.isPartnerRetired === true) {
                if (x == true) {
                  this.partnerPourcentage = 50
                  break;
                }
                else {
                  this.partnerPourcentage = 100
                  break;
                }
              }
              else {
                this.partnerPourcentage = -1
                break;
              }
              break;
            }
        }
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
    const ageMilliseconds = currentDate.getTime() - birthdate.getTime();
    const ageDate = new Date(ageMilliseconds);
    return Math.abs(ageDate.getUTCFullYear() - birthYear);
  }



  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }
}
