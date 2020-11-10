import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Coach} from 'src/app/coach';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})

export class CoachService {

  apiUrl = 'https://localhost:5001/api/Coach/';
  
  constructor(private readonly httpClient: HttpClient) { }

  getCoachesFromApi(): Observable<Coach[]> {
    return this.httpClient.get(this.apiUrl).pipe(
      tap((coaches: Coach[]) => console.log(coaches))); 
  }
  
  getCoachById(id: string): Observable<Coach> {
    return this.httpClient.get(this.apiUrl + id).pipe(
      tap((coach: Coach) => console.log(coach)));
  }

  deleteCoach(id: string): Observable<{}> {
    return this.httpClient.delete(this.apiUrl + id);  
  }
}



