import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CoachListComponent } from 'src/app/coach-list/coach-list.component';
import { AddCoachComponent } from './add-coach/add-coach.component';
import { EditCoachComponent } from 'src/app/edit-coach/edit-coach.component';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';
import {PageNotFoundComponent} from 'src/app/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/coaches', pathMatch: 'full'},
  {path: 'coaches', component: CoachListComponent},
  {path: 'coach/add', component: AddCoachComponent},
  {path: 'coach/:id', component: CoachDetailComponent},
  {path: 'coach/edit/:id', component: EditCoachComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CoachListComponent,
  AddCoachComponent,
  EditCoachComponent,
  CoachDetailComponent,
  PageNotFoundComponent
];
