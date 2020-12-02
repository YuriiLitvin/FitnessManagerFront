import { Component, OnInit } from '@angular/core';
import { CoachService } from 'src/app/services/coach.service';
import { Coach } from 'src/app/coach';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators'; 

@Component({
    selector: 'app-coach-list',
    templateUrl: './coach-list.component.html',
    styleUrls: ['./coach-list.component.scss']
})
export class CoachListComponent implements OnInit {
    
    $coaches = new Subject<Coach[]>();

    constructor(private coachService: CoachService) {}
    
    ngOnInit(): void {
      this.getCoaches();
      
    }
    
    getCoaches(): void {
      this.coachService.getCoachesFromApi()
      .subscribe(coaches => this.$coaches.next(coaches)); 
    }

    deleteCoach(id: string): void {
      this.coachService.deleteCoach(id)
      .pipe(tap(() => this.getCoaches()))
      .subscribe(coach => console.log(coach));
    }

}
