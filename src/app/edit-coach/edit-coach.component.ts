import { Component, OnInit } from '@angular/core';
import { Coach } from '../coach';
import { CoachService } from 'src/app/services/coach.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-coach',
  templateUrl: './edit-coach.component.html',
  styleUrls: ['./edit-coach.component.scss']
})
export class EditCoachComponent implements OnInit {
  
  coach: Coach;
  
  trainings = [];

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
    
    this.trainings = this.coachService.trainings;
  }
  onEdit(coachForm): void {
    this.coachService.updateCoach(this.coach)
    // tslint:disable-next-line: no-shadowed-variable
    .subscribe(coachForm => console.log(coachForm));
    this.location.back();
  
  }
  goBack(): void {
      this.location.back();
    }

  // getTrainings(): string[] {
  //   return this.trainings = this.coach.typeOfTraining;
  // }
  
}
