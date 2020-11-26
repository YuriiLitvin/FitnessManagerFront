import {Component, OnInit} from '@angular/core';
import {CoachService} from 'src/app/services/coach.service';
import {Coach} from 'src/app/coach';
import { Subject } from 'rxjs';
import { Router } from '@angular/router'; 

@Component({
    selector: 'app-coach-list',
    templateUrl: './coach-list.component.html',
    styleUrls: ['./coach-list.component.scss']
})
export class CoachListComponent implements OnInit {
    
    // coach: Coach;
    $coach = new Subject<Coach>();
    $coaches = new Subject<Coach[]>();
    
    
    constructor(private coachService: CoachService, 
                private router: Router) {}
    
    ngOnInit(): void {
      
      this.getCoaches();
      
    }

    getCoaches(): void {
      this.coachService.getCoachesFromApi()
      .subscribe(coaches => this.$coaches.next(coaches)); 
    }


    getCoachById(id: string): void {
      this.coachService.getCoachById(id)
      .subscribe(coach => this.$coach.next(coach));
    }

    deleteCoach(id: string): void {
      this.coachService.deleteCoach(id)
      .subscribe((coach: Coach) => this.$coach.next(coach));
    }

    onSelect(coach: Coach): void {
      this.router.navigate(['/coach', coach.id]);
    }



}
