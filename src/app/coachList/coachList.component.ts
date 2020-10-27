import {Component} from '@angular/core';

@Component({
    selector: 'app-coachList',
    templateUrl: './coachList.component.html',
    styleUrls: ['./coachList.component.scss']
})
export class CoachListComponent {
    title = 'My Coach Title'
    

    getCoaches(){
        const apiLink = "https://localhost:5001/api/Coach"

        const coachRequest = fetch(apiLink)
        
        coachRequest
        .then((response: { json: () => any; })=>response.json())
        .then((coahes: any)=>console.table(coahes))
    
    }

}