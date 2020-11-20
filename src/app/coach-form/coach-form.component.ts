import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {Coach} from '../coach';
import {CoachService} from '../services/coach.service';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.scss']
})
export class CoachFormComponent implements OnInit{


  model: Coach;
  coachForm: any;
  formGroup;

  constructor(
    private coachService: CoachService,
    private formBuilder: FormBuilder,
  ) 
    {
    this.coachForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      typeOfTraining: ''
    });
    }
  
    ngOnInit(): void {
  }
  
    onSubmit(coachForm): void {
      this.coachService.addCoach(this.coachForm)
      .subscribe();
    }

  // newCoach(): void {
  //   this.model = new Coach();
  // }
}