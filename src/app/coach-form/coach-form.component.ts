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

  
  coach = new Coach();


  constructor(
    private coachService: CoachService,
    private formBuilder: FormBuilder,
  ) {}
  
    onSubmit(coachForm): void {
      this.coachService.addCoach(this.coach)
      .subscribe(coachForm => this.coach = coachForm);

    }

  // newCoach(): void {
  //   this.model = new Coach();
  // }
}
