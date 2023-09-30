import { Component, EventEmitter, Output } from '@angular/core';
import { Reservation } from 'src/app/models/reservation';
import { SharedVariablesService } from 'src/app/services/shared-variables.service';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
import { Defunt } from 'src/app/models/defunt';
import { DefuntService } from 'src/app/services/defunt.service';
import { HttpErrorResponse } from '@angular/common/http';



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

  cin:string="";
  tel:string="";
  userRelationship:string=""

  constructor(private router: Router, public reservationService: ReservationService, public sharedVariablesService: SharedVariablesService,  private defuntService: DefuntService ) { 
    this.minDate=new Date()
  }

  ngOnInit(){

    console.log("cin after", this.sharedVariablesService.cin)
    console.log("relation after", this.sharedVariablesService.userRelationship)
    console.log("tel after", this.sharedVariablesService.tel)
    this.cin=this.sharedVariablesService.cin;
    this.tel=this.sharedVariablesService.tel;
    this.userRelationship=this.sharedVariablesService.userRelationship

  }
  formatDateStart() {
    this.startDate=this.selectedDateStart?.toDate()
  }

  formatDateEnd() {
    this.endDate=this.selectedDateEnd?.toDate()
  }

  onSubmit() {
    let defunt: Defunt = {
      cin: this.sharedVariablesService.cin,
      hasChildren: this.sharedVariablesService.hasChildren,
      retired: this.sharedVariablesService.isRetired
    }
    console.log(defunt)

    this.defuntService.addDefunt(defunt).subscribe(
      (response: Defunt) => {
        console.log("response de defuntService",response)
        let reservation: Reservation ={
          nomComplet: this.nomComplet,
          nomCompletArabe:" ",
          tel: this.tel,
          userRelationship:this.userRelationship,
          startDate: `${this.startDate?.getDate().toString().padStart(2, '0')}/${(this.startDate!.getMonth() + 1).toString().padStart(2, '0')}/${this.startDate?.getFullYear()}`,
          endDate: `${this.endDate?.getDate().toString().padStart(2, '0')}/${(this.endDate!.getMonth() + 1).toString().padStart(2, '0')}/${this.endDate?.getFullYear()}`,
          startHour:this.selectedTimeStart,
          endHour:this.selectedTimeEnd
        }
        console.log("cin ", this.sharedVariablesService.cin)
        this.reservationService.createReservation(reservation, defunt.cin).subscribe(
          (response: Reservation) => { console.log(response) },
          (error: HttpErrorResponse) => {
            console.log(error)
          }
        );

         this.reservationService.getAllReservations().subscribe((data) => {
          console.log('Loaded data:', data);
          this.sharedVariablesService.reservations=data;
        });
      })
    

   
    
    this.inputChange.emit();
    //initializing variables
    this.sharedVariablesService.cin="";
    this.sharedVariablesService.tel="";
    this.sharedVariablesService.userRelationship=""
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
