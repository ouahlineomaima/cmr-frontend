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

 
  private apiUrl = "http://localhost:8080/api/reservations";

  constructor(private http: HttpClient) { }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation, httpOptions).pipe(
      catchError((error)=>{
        console.log("Post is not working", error);
        throw error
      })
    );
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl).pipe(
      catchError((error)=>{
        console.log("Get is not working ",error);
        throw error
      })
    )
  }

  updateReservation(reservation: Reservation): Observable<any> {
    return this.http.put(`${this.apiUrl}/${reservation.cinDefunt}`, reservation);
}

  createOrUpdateReservation(reservation: Reservation):Observable<any>{
    if (reservation.cinDefunt) {
      // Check if reservation with the given cinDefunt exists
      return this.http.put(`${this.apiUrl}/${reservation.cinDefunt}`, reservation);
  } else {
      // No cinDefunt provided, create a new reservation
      return this.http.post(this.apiUrl, reservation);
  }
  }

  deleteData(id:string):Observable<Reservation>{
    return  this.http.delete<Reservation>(`${this.apiUrl}/${id}`);
  }
  
}
