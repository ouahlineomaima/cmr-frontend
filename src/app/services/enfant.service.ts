import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Defunt } from '../interfaces/defunt';
import { Child } from '../interfaces/child';
import { Enfant } from '../interfaces/enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addEnfant(enfant: Enfant, cin:String):Observable<Enfant>{
    return this.http.post<Enfant>(`${this.apiServerUrl}/defunts/${cin}/enfants`, enfant);
  }
}
