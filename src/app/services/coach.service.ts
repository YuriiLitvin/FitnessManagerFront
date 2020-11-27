import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Coach} from 'src/app/coach';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class CoachService {

  apiUrl = 'https://localhost:5001/api/Coach/';

  // public trainings = ['Yoga', 'Dances', 'Fitness', 'PowerLifting'];

  
  constructor(private readonly httpClient: HttpClient) { }

  getCoachesFromApi(): Observable<Coach[]> {
    return this.httpClient.get(this.apiUrl).pipe(
      tap((coaches: Coach[]) => console.log(coaches))); 
  }
  
  getCoachById(id: string): Observable<Coach> {
    return this.httpClient.get(this.apiUrl + id).pipe(
      tap((coach: Coach) => coach));
  }

  addCoach(coach: Coach): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};  
    const body = JSON.stringify(coach);
    return this.httpClient.post<any>(this.apiUrl, body, httpOptions);
     
  }

  updateCoach(coach: Coach): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};  
    const body = JSON.stringify(coach);
    return this.httpClient.put<any>(this.apiUrl + coach.id , body, httpOptions);
  }

  deleteCoach(id: string): Observable<{}> {
    return this.httpClient.delete(this.apiUrl + id);  
  }
}



