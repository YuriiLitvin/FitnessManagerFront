import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import {Coach} from '../coach';
import {CoachService} from '../services/coach.service';
import {FormBuilder, FormArray, FormGroup} from '@angular/forms';
import { Location } from '@angular/common';


@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.scss']
})
export class CoachFormComponent {

  
  coach = new Coach();


  constructor(
    private coachService: CoachService,
    private location: Location,
  ) {}
  
    onSubmit(coachForm): void {
      this.coachService.addCoach(this.coach)
      // tslint:disable-next-line: no-shadowed-variable
      .subscribe(coachForm => console.log(coachForm));
      this.location.back();

    }
    // goBack(): void {
    //   this.location.back();
    // }
  
}
