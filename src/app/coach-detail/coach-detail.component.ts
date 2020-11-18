import { Component, OnInit } from '@angular/core';
import {Coach} from '../coach';
import {CoachService} from 'src/app/services/coach.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.scss']
})
export class CoachDetailComponent implements OnInit {

  $coach = new Subject<Coach>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coachService: CoachService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.coachService.getCoachById(params.get('id')))
    ).subscribe(coach => this.$coach.next(coach));
  }
  




}
