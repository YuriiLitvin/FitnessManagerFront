import {Component, OnInit} from '@angular/core';
import {CoachService} from 'src/app/services/coach.service';

@Component({
    selector: 'app-coachList',
    templateUrl: './coachList.component.html',
    styleUrls: ['./coachList.component.scss']
})
export class CoachListComponent implements OnInit {
    title = 'coaches'
    constructor (private coachService: CoachService) {}
    

    ngOnInit() {
       return this.getCoaches();
    }

    getCoaches() {
      return this.coachService.GetCoaches(); 
    }
}