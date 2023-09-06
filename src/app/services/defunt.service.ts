import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Defunt } from '../interfaces/defunt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DefuntService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public addDefunt(defunt: Defunt):Observable<Defunt>{
    return this.http.post<Defunt>(`${this.apiServerUrl}/defunts`, defunt);
  }

}
