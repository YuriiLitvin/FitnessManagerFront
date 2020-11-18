import { Component, OnInit } from '@angular/core';
import {Coach} from '../coach';
import {CoachService} from 'src/app/services/coach.service';

@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.scss']
})
export class CoachFormComponent implements OnInit {

  constructor(private readonly coachService: CoachService) { }

  typeOfTraining = ['Yoga', 'PowerLifting', 'Dances', 'Fitness' ];

  ngOnInit(): void {
  }



}
