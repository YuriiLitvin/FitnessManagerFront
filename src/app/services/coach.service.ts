import { Injectable } from '@angular/core';
import {Coach} from 'src/app/coach';



@Injectable({
  providedIn: 'root'
})

export class CoachService {

  constructor() { }

  coaches = [{
    firstName: 'Petrovich',
    lastName: '',
    email: 'petrovich@gmail.com',
    mobileNumber: '09923',
    typeOfTraining: 1
  },
  {
    firstName: 'Samson',
    lastName: '',
    email: 'samson@gmail.com',
    mobileNumber: '097325',
    typeOfTraining: 2
  },
  {
    firstName: 'Oleksandr',
    lastName: 'I',
    email: 'sashkapower@gmail.com',
    mobileNumber: '09544234',
    typeOfTraining: 3
  },
  {
    firstName: 'Anna',
    lastName: 'G.',
    email: 'g_anna@gmail.com',
    mobileNumber: '0930954',
    typeOfTraining: 0
  },
  {
    firstName: 'John',
    lastName: 'True',
    email: 'trueJohn@urk.net',
    mobileNumber: '06623453',
    typeOfTraining: 3
  },
  {
    firstName: 'Billy',
    lastName: 'Moodily',
    email: 'dugMoodug@gmail.com',
    mobileNumber: '00044434',
    typeOfTraining: 2
  }];

  GetCoaches(): Coach[] {
    return this.coaches;
  }
}
