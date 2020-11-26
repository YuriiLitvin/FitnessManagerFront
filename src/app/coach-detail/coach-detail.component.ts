import { Component, OnInit } from '@angular/core';
import {Coach} from '../coach';
import {CoachService} from 'src/app/services/coach.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
// import { Subject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.scss']
})
export class CoachDetailComponent implements OnInit {

  coach: Coach;
  coaches: Coach[];
  coachId: number;
  constructor(
    private route: ActivatedRoute,
    private coachService: CoachService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.coachService.getCoachesFromApi()
        .subscribe(coaches => this.coaches = coaches);
    
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.coachId = id;
  }
 
  goBack(): void {
    this.location.back();
  }




}
