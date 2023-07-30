import { Component } from '@angular/core';
import { Child, SharedVariablesService } from 'src/app/services/shared-variables.service';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {

  constructor(public sharedVariablesService: SharedVariablesService) { }

  selectedDateOfBirth: Date | null = null;
  selectedIsCurrentlyStudying: boolean | null = null;
  selectedMarialStatus: string = '';
  selectedIsInfirm: string | null = null;
  selectedInfirmityType: string | null = null;


  child = {
    dateOfBirth: this.selectedDateOfBirth,
    isCurrentlyStudying: this.selectedIsCurrentlyStudying,
    marialStatus: this.selectedMarialStatus,
    isInfirm: this.selectedIsInfirm,
    infirmityType: this.selectedInfirmityType
  }

  infirmities: Array<string> = ['Physique', 'Mentale']



}
