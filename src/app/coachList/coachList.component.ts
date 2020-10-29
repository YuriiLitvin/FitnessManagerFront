import {Component, OnInit} from '@angular/core';
import {CoachService} from '../coach.service';

@Component({
    selector: 'app-coachList',
    templateUrl: './coachList.component.html',
    styleUrls: ['./coachList.component.scss']
})
export class CoachListComponent implements OnInit {
    title = 'coaches'
    
    constructor (private coachService: CoachService) {}
    
    ngOnInit() {
        this.getCoaches();
    }

    getCoaches() {
       const coaches = this.coachService.GetCoaches(); 
    }
}