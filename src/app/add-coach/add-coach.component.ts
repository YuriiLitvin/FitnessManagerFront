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

  trainingTypes = TrainingTypes;

  keys = Object.keys;

  coach = new Coach();

  constructor(
    private coachService: CoachService,
    private location: Location,
  ) {}
    
  ngOnInit(): void {
  } 
    
  onSubmit(): void {
   
    this.coachService.addCoach(this.coach)
    .subscribe(() => console.log(this.coach));
    
    this.location.back();

  } 
  
}
