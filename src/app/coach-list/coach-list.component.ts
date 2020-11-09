import {Component, OnInit} from '@angular/core';
import {CoachService} from 'src/app/services/coach.service';
import {Coach} from 'src/app/coach';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-coach-list',
    templateUrl: './coach-list.component.html',
    styleUrls: ['./coach-list.component.scss']
})
export class CoachListComponent implements OnInit {
    
    id: string;
    $coach = new Subject<Coach>();
    $coaches = new Subject<Coach[]>();
    

    constructor(private coachService: CoachService) {}
    
    ngOnInit(): void {
      this.getCoaches();
    }

    getCoaches(): void {
      this.coachService.getCoachesFromApi()
      .subscribe(coaches => this.$coaches.next(coaches)); 
    }

    inputHandler(event: any): void {
      this.id = event.target.value;
    }

    getCoacheById(): void {
      this.coachService.getCoachById(this.id)
      .subscribe(coach => this.$coach.next(coach));
    }

    deleteCoach(): void {
      this.coachService.deleteCoach(this.id)
      .subscribe((coach: Coach) => this.$coach.next(coach));
    }
}
