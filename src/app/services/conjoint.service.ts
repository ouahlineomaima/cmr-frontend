import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enfant } from '../models/enfant';
import { Conjoint } from '../models/conjoint';

@Injectable({
  providedIn: 'root'
})
export class ConjointService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addConjoint(conjoint: Conjoint, cin:String):Observable<Conjoint>{
    return this.http.post<Conjoint>(`${this.apiServerUrl}/defunts/${cin}/conjoints`, conjoint);
  }
}
