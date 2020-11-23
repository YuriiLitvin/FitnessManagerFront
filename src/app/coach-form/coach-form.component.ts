import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import {Coach} from '../coach';
import {CoachService} from '../services/coach.service';
import {FormBuilder, FormArray, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.scss']
})
export class CoachFormComponent {

  
  
  constructor(
    private coachService: CoachService,
    private formBuilder: FormBuilder,
  ) {}
  
  coachForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    mobileNumber: [''],
    typeOfTraining: [''],
  });
  
    
  
    onSubmit(coachForm): void {
      this.coachService.addCoach(coachForm.value)
      .subscribe();

    }

  // newCoach(): void {
  //   this.model = new Coach();
  // }
}
