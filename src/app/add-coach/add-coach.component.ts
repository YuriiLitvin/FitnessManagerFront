import { Component, OnInit } from '@angular/core';
import { Coach } from '../coach';
import { CoachService } from '../services/coach.service';
import { Location } from '@angular/common';
import { TrainingTypes } from '../training-types';

@Component({
  selector: 'app-add-coach',
  templateUrl: './add-coach.component.html',
  styleUrls: ['./add-coach.component.scss']
})
export class AddCoachComponent implements OnInit{

  trainingTypes: any;

  keys = Object.keys;

  coach = new Coach();
  coachForm: Coach;

  constructor(
    private coachService: CoachService,
    private location: Location,
  ) {}
    
  ngOnInit(): void {
   this.trainingTypes = TrainingTypes;
  } 
    
  onSubmit(coachForm: Coach): void {
    this.coachService.addCoach(this.coachForm)
    .subscribe(() => console.log(coachForm));
    
    this.location.back();

  } 
  
}
