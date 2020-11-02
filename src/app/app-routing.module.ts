import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachListComponent} from 'src/app/coachList/coachList.component';
import {AddOrEditCoachComponent} from 'src/app/add-or-edit-coach/add-or-edit-coach.component';
import {PageNotFoundComponent} from 'src/app/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'coach', component: CoachListComponent},
  {path: 'coach/add', component: AddOrEditCoachComponent},
  {path: 'coach/edit/:id', component: AddOrEditCoachComponent},
  {path: '', redirectTo: '/coach', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
