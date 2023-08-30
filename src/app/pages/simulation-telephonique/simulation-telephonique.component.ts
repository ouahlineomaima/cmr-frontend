import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simulation-telephonique',
  templateUrl: './simulation-telephonique.component.html',
  styleUrls: ['./simulation-telephonique.component.css']
})
export class SimulationTelephoniqueComponent {

  // selectedDateRange:Date
  selectedTimeStart:string="09:00";
  selectedTimeEnd : string = "15:09" ;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();

  isButtonDisabled: boolean = true;
  isDeclared: boolean = false;

  onSubmit() {
    // let child: Child = {
    //   name: this.childName,
    //   dateOfBirth: `${this.selectedDateOfBirth?.getDate().toString().padStart(2, '0')}/${(this.selectedDateOfBirth!.getMonth() + 1).toString().padStart(2, '0')}/${this.selectedDateOfBirth?.getFullYear()}`,
    // }
    this.isButtonDisabled = true;
    this.isDeclared = true;
    this.inputChange.emit();
  }

}
