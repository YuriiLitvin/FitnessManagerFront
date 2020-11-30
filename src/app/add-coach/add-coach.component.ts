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

  // trainings = ['Yoga', 
  // 'Dances',
  // 'Fitness',
  // 'PowerLifting'];
  trainings: any;
  keys = Object.keys;
  coach = new Coach();

  constructor(
    private coachService: CoachService,
    private location: Location,
  ) {}
    
  ngOnInit(): void {
   this.trainings = TrainingTypes;
  } 
    
    
  onSubmit(coachForm): void {
    this.coachService.addCoach(this.coach)
    // tslint:disable-next-line: no-shadowed-variable
    .subscribe(coachForm => console.log(coachForm));
    
    this.location.back();

  } 
  
}
