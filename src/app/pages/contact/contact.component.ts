import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  constructor(private router: Router, public sharedVariablesService:SharedVariablesService) {}

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
}
