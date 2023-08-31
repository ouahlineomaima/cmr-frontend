import { Component, EventEmitter, Output } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';
import { Router } from '@angular/router';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { DateTime } from 'luxon';
// import { NgxMatTimepickerService } from 'ngx-mat-timepicker/lib/services/ngx-mat-timepicker.service';



@Component({
  selector: 'app-simulation-telephonique',
  templateUrl: './simulation-telephonique.component.html',
  styleUrls: ['./simulation-telephonique.component.css']
})
export class SimulationTelephoniqueComponent {


  classNamesForTimeline: Array<string> = ['done', 'current-item', 'comming'];
  nomComplet:string=""
  selectedTimeStart:string|""="";
  selectedTimeEnd : string|"" = "" ;
  selectedDateStart: Object |any =null;
  selectedDateEnd: Object | any = null;
  startDate: Date | null =null;
  endDate: Date | null = null;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();



  isButtonDisabled: boolean = true;
  isDeclared: boolean = false;


  constructor(private router: Router, public sharedVariablesService: SharedVariablesService) { }

  formatDateStart() {
    this.startDate=this.selectedDateStart?.toDate()
  }

  formatDateEnd() {
    this.endDate=this.selectedDateEnd?.toDate()
  }

  onSubmit() {
    let reservation: Reservation ={
      nomComplet: this.nomComplet,
      CIN: this.sharedVariablesService.cin,
      tel: this.sharedVariablesService.tel,
      userRelationship:this.sharedVariablesService.userRelationship,
      startDate: `${this.startDate?.getDate().toString().padStart(2, '0')}/${(this.startDate!.getMonth() + 1).toString().padStart(2, '0')}/${this.startDate?.getFullYear()}`,
      endDate: `${this.endDate?.getDate().toString().padStart(2, '0')}/${(this.endDate!.getMonth() + 1).toString().padStart(2, '0')}/${this.endDate?.getFullYear()}`,
      startHour:this.selectedTimeStart,
      endHour:this.selectedTimeEnd
    }
    console.log("object reser ",reservation)
    console.log("before push ", this.sharedVariablesService.reservations)
    this.sharedVariablesService.reservations.push(reservation)
    console.log("after push ", this.sharedVariablesService.reservations)

    this.inputChange.emit();
    this.router.navigate(['/resultat-telephonique']);

  }

  

  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }

  
  goBack() {
    // Reinitializing variables to mantain the logic
    this.router.navigate(['/choix-simulation']);
  }

}
