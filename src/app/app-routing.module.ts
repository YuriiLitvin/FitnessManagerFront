import { CoachFormComponent } from './coach-form/coach-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoachListComponent} from 'src/app/coach-list/coach-list.component';
import {AddOrEditCoachComponent} from 'src/app/add-or-edit-coach/add-or-edit-coach.component';
import {PageNotFoundComponent} from 'src/app/page-not-found/page-not-found.component';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/coaches', pathMatch: 'full'},
  {path: 'coaches', component: CoachListComponent},
  {path: 'coach/:id', component: CoachDetailComponent},
  {path: 'add', component: AddOrEditCoachComponent},
  {path: 'coach/edit/:id', component: AddOrEditCoachComponent},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
