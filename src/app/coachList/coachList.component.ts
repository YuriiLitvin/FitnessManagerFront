import {Component, OnInit} from '@angular/core';
import {CoachService} from 'src/app/services/coach.service';
import {Coach} from 'src/app/coach';

@Component({
    selector: 'app-coachList',
    templateUrl: './coachList.component.html',
    styleUrls: ['./coachList.component.scss']
})
export class CoachListComponent implements OnInit {
    title = 'coaches'
    constructor (private coachService: CoachService) {}
    
    coaches: Coach[]
    
    ngOnInit() {
       this.getCoaches();
    }

    getCoaches() {
      this.coaches = this.coachService.GetCoaches(); 
    }
}