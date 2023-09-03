import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, pipe } from 'rxjs';
import { Reservation } from '../interfaces/reservation';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 
  private apiUrl = 'http://localhost:8080/api/reservations'; // Update the path to your JSON file

  constructor(private http: HttpClient) { }

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation, httpOptions);
  }

  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.apiUrl).pipe(
      catchError((error)=>{
        console.log("orss mayaghn ghaya ",error);
        throw error
      })
    )
  }

  updateReservation(reservation: Reservation): Observable<any> {
    return this.http.put(`${this.apiUrl}/${reservation.cinDefunt}`, reservation);
}

  deleteData(id:string):Observable<Reservation>{
    return  this.http.delete<Reservation>(`${this.apiUrl}/${id}`);
  }
  
}
