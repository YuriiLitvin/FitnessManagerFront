import {Component, OnInit} from '@angular/core';
import {CoachService} from 'src/app/services/coach.service';
import {Coach} from 'src/app/coach';

@Component({
    selector: 'app-coach-list',
    templateUrl: './coach-list.component.html',
    styleUrls: ['./coach-list.component.scss']
})
export class CoachListComponent implements OnInit {
    title = 'coaches';
    constructor(private coachService: CoachService) {}
    
    id: string;
    coach: Coach;
    coaches: Coach[];
    
    ngOnInit(): void {
       // this.getCoaches();
    }

    getCoaches(): void {
      this.coachService.GetCoachesFromApi()
      .subscribe(coaches => this.coaches = coaches); 
    }

    inputHandler(event: any): void {
      this.id = event.target.value;
    }

    getCoacheById(): void {
      this.coachService.GetCoachById(this.id)
      .subscribe((coach: Coach) => this.coach = coach);
    }

    deleteCoach(): void {
      this.coachService.DeleteCoach(this.id);
    }
}
