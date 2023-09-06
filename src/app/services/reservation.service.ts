import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe } from 'rxjs';
import { Reservation } from '../interfaces/reservation';
import { environment } from 'src/environments/environment';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  createReservation(reservation: Reservation, cin: String): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/defunts/${cin}/reservations`, reservation)
    // .pipe(
    //   catchError((error)=>{
    //     console.log("Post is not working", error);
    //     throw error
    //   })
    // );
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations`).pipe(
      catchError((error)=>{
        console.log("Get is not working ",error);
        throw error
      })
    )
  }


  deleteData(id:string):Observable<Reservation>{
    return  this.http.delete<Reservation>(`${this.apiUrl}/${id}`);
  }
  
}
