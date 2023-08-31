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
export class DataService {

 
  private dataUrl = 'http://localhost:5000/reservations'; // Update the path to your JSON file

  constructor(private http: HttpClient) { }

  writeData(data: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.dataUrl, data, httpOptions);
  }

  readData(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.dataUrl).pipe(
      catchError((error)=>{
        console.log("orss mayaghn ghaya ",error);
        throw error
      })
    )
  }

  deleteData(id:string):Observable<Reservation>{
    return  this.http.delete<Reservation>(`${this.dataUrl}/${id}`);
  }
  
}
