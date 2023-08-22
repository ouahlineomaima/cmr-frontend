import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';
import { Child } from 'src/app/interfaces/child';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
  providers: [DatePipe]
})
export class EnfantComponent {
  @Input() order: number = 1;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(public sharedVariablesService: SharedVariablesService, private datePipe: DatePipe) { }

  childName : string = '';
  selectedDateOfBirthRaw: object | any = null;
  selectedDateOfBirth: Date | null = null;
  selectedIsCurrentlyStudying: string | null = null;
  selectedMarialStatus: string = '';
  selectedIsInfirm: string | null = null;
  selectedInfirmityType: string | null = null;
  isButtonDisabled: boolean = true;
  isDeclared: boolean = false;
  startDate = new Date(1992, 0, 1);


  infirmities: Array<string> = ['Physique', 'Mentale']


  updateButtonState() {
    if (!this.isDeclared) {
      const isDateOfBirthSelected = this.selectedDateOfBirthRaw !== null;
      const isIsCurrentlyStudyingSelected = this.selectedIsCurrentlyStudying !== null;
      const isMarialStatusSelected = this.selectedMarialStatus !== '';
      const isIsInfirmSelected = this.selectedIsInfirm !== null;

      if (isIsInfirmSelected && this.selectedIsInfirm === 'true') {
        this.isButtonDisabled =
          !(isDateOfBirthSelected && isIsCurrentlyStudyingSelected && isMarialStatusSelected && this.selectedInfirmityType !== null);
      } else if (isIsInfirmSelected && this.selectedIsInfirm === 'false') {
        this.isButtonDisabled =
          !(isDateOfBirthSelected && isIsCurrentlyStudyingSelected && isMarialStatusSelected);
      }

    }


  }

  formatDate() {
    this.selectedDateOfBirth = this.selectedDateOfBirthRaw?.toDate();
  }

  onSubmit() {
    let child: Child = {
      name: this.childName,
      dateOfBirth: `${this.selectedDateOfBirth?.getDate().toString().padStart(2, '0')}/${(this.selectedDateOfBirth!.getMonth() + 1).toString().padStart(2, '0')}/${this.selectedDateOfBirth?.getFullYear()}`,
      isCurrentlyStudying: this.selectedIsCurrentlyStudying === 'true',
      marialStatus: this.selectedMarialStatus,
      isInfirm: this.selectedIsInfirm === 'true',
      infirmityType: this.selectedInfirmityType
    }
    this.sharedVariablesService.children.push(child)
    this.sharedVariablesService.childOrder += 1;
    this.isButtonDisabled = true;
    this.isDeclared = true;
    this.inputChange.emit();
  }
  
}
