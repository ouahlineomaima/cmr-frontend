import { Component, EventEmitter, Output } from '@angular/core';
import { Reservation } from 'src/app/interfaces/reservation';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
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
  
  reservations : Reservation[] = []
  minDate:Date|null=null

  constructor(private router: Router, public reservationService: ReservationService, public sharedVariablesService: SharedVariablesService) { 
    this.minDate=new Date()
  }

  ngOnInit(){

    

  }
  formatDateStart() {
    this.startDate=this.selectedDateStart?.toDate()
  }

  formatDateEnd() {
    this.endDate=this.selectedDateEnd?.toDate()
  }

  onSubmit() {
    let reservation: Reservation ={
      nomComplet: this.nomComplet,
      nomCompletArabe:" ",
      cinDefunt: this.sharedVariablesService.cin,
      tel: this.sharedVariablesService.tel,
      userRelationship:this.sharedVariablesService.userRelationship,
      startDate: `${this.startDate?.getDate().toString().padStart(2, '0')}/${(this.startDate!.getMonth() + 1).toString().padStart(2, '0')}/${this.startDate?.getFullYear()}`,
      endDate: `${this.endDate?.getDate().toString().padStart(2, '0')}/${(this.endDate!.getMonth() + 1).toString().padStart(2, '0')}/${this.endDate?.getFullYear()}`,

      startHour:this.selectedTimeStart,
      endHour:this.selectedTimeEnd
    }
    // console.log("object reser ",reservation)
    // console.log("before push ", this.sharedVariablesService.reservations)
    // this.sharedVariablesService.reservations.push(reservation)
    // console.log("after push ", this.sharedVariablesService.reservations)

    // this.reservationService.createOrUpdateReservation(reservation).subscribe(() => {
    //   console.log('Data saved successfully.');
    // });

    
    this.reservationService.createReservation(reservation).subscribe(() => {
      console.log('Data saved successfully.');
    });

    this.reservationService.getAllReservations().subscribe((data) => {
      console.log('Loaded data:', data);
      this.sharedVariablesService.reservations=data;
    });
    
    this.inputChange.emit();
    this.router.navigate(['/resultat-telephonique']);

  }


  updateButtonChange(){
    this.isButtonDisabled=!(this.nomComplet&&this.selectedTimeStart&&this.selectedTimeEnd&&this.startDate&&this.endDate)
  }


  // ngOnInit(){

  //   this.deleteReservation("75981f7d-5536-4a94-b421-27cb0e2d1f23")
  // }

  goToAccueilPage() {
    this.router.navigate(['/accueil']);
    
  }

  deleteReservation(id:any){
    this.reservationService.deleteData(id).subscribe(()=>{
      console.log("deleted successfully")
    })
  } 

  
  goBack() {
    // Reinitializing variables to mantain the logic
    this.router.navigate(['/choix-simulation']);
  }

}
