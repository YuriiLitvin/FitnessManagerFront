import { Component, OnInit } from '@angular/core';
import { Coach } from '../coach';
import { CoachService } from 'src/app/services/coach.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { TrainingTypes } from '../training-types';

@Component({
  selector: 'app-edit-coach',
  templateUrl: './edit-coach.component.html',
  styleUrls: ['./edit-coach.component.scss']
})
export class EditCoachComponent implements OnInit {
  
  coach = new Coach();

  trainingTypes = TrainingTypes;
  
  keys = Object.keys;

  constructor(
    private route: ActivatedRoute,
    private coachService: CoachService,
    private location: Location,
    
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.coachService.getCoachById(params.get('id')))
    ).subscribe(coach => this.coach = coach);
    
  }
  onSubmit(): void {
    this.coachService.updateCoach(this.coach)
    .subscribe(() => console.log(this.coach));
    this.location.back();
  
  }
  goBack(): void {
      this.location.back();
    }

}
