import { Component } from '@angular/core';
import { Child, SharedVariablesService } from 'src/app/services/shared-variables.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
  providers: [DatePipe]
})
export class EnfantComponent {

  constructor(public sharedVariablesService: SharedVariablesService, private datePipe: DatePipe) { }

  selectedDateOfBirthRaw: object | any = null;
  selectedDateOfBirth: Date | null = null;
  selectedIsCurrentlyStudying: boolean | null = null;
  selectedMarialStatus: string = '';
  selectedIsInfirm: string | null = null;
  selectedInfirmityType: string | null = null;
  isButtonDisabled: boolean = true;


  child = {
    dateOfBirth: this.selectedDateOfBirth,
    isCurrentlyStudying: this.selectedIsCurrentlyStudying,
    marialStatus: this.selectedMarialStatus,
    isInfirm: this.selectedIsInfirm,
    infirmityType: this.selectedInfirmityType
  }

  infirmities: Array<string> = ['Physique', 'Mentale']
  updateButtonState() {
    
  }

  formatDate(){
    this.selectedDateOfBirth = this.selectedDateOfBirthRaw?.toDate();

  }

  onSubmit(){
  }
}
