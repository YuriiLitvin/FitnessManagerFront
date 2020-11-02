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
    
    coaches: Coach[];
    
    ngOnInit(): void {
       this.getCoaches();
    }

    getCoaches(): void {
      this.coaches = this.coachService.GetCoaches(); 
    }
}
