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

  // minTime: DateTime = DateTime.fromObject({ hour: 8, minute: 0 });
  // maxTime: DateTime = DateTime.fromObject({ hour: 18, minute: 0 });
  // selectedDateRange:Date

  minTime: string = '07:00';
  maxTime: string = '15:30';

  // minTime: any = this.timepickerService.getValidTime({ minute: 0, hour: 8 });
  // maxTime: any = this.timepickerService.getValidTime({ minute: 0, hour: 18 });
  selectedTimeStart:string|""="";
  selectedTimeEnd : string|"" = "" ;
  startDate: Date | any =null;
  endDate: Date | null = null;
  @Output() inputChange: EventEmitter<string> = new EventEmitter<string>();



  isButtonDisabled: boolean = true;
  isDeclared: boolean = false;


  constructor(private router: Router, public sharedVariablesService: SharedVariablesService) { }

  onSubmit() {

    console.log("start date", this.startDate._i.date.toString(), "type of ", typeof(this.startDate))
    console.log("end date", this.endDate)
    // this.isDeclared = true;
    // this.inputChange.emit();
  }

  goToAccueilPage() {
    this.router.navigate(['/accueil']);
  }

  
  goBack() {
    // Reinitializing variables to mantain the logic
    this.router.navigate(['/choix-simulation']);
  }
}
