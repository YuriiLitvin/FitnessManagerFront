import { Component } from '@angular/core';

import { Coach } from '../coach';

@Component({
  selector: 'app-coach-form',
  templateUrl: './coach-form.component.html',
  styleUrls: ['./coach-form.component.scss']
})

export class CoachFormComponent {

  // powers = ['Really Smart', 'Super Flexible',
  //           'Super Hot', 'Weather Changer'];

  // model = new Coach (18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  // onSubmit() { this.submitted = true; }

  // // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }
}
