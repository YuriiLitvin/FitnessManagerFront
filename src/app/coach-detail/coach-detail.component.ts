import { Component, OnInit } from '@angular/core';
import { Coach } from '../coach';
import { CoachService } from 'src/app/services/coach.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.scss']
})
export class CoachDetailComponent implements OnInit {

  // coach: Coach = {
  //   id: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   mobileNumber: '',
  //   typeOfTraining: 0
  // };
 
  coach = new Coach();
  
  constructor(
    private route: ActivatedRoute,
    private coachService: CoachService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.coachService.getCoachById(params.get('id')))
    ).subscribe(coach => this.coach = coach);

  }
 
  goBack(): void {
    this.location.back();
  }

}
