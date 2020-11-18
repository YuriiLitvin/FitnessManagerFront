import { Component, OnInit } from '@angular/core';
import {Coach} from '../coach';
import {CoachService} from 'src/app/services/coach.service';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.scss']
})
export class CoachDetailComponent implements OnInit {

  coach: Coach;

  constructor(private readonly coachService: CoachService) { }

  ngOnInit(): void {
  }
  getCoach(): void {
    this.coachService.getCoachById(this.coach.id)
      .subscribe(coach => this.coach = coach);
  }




}
