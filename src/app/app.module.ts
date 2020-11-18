import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoachListComponent} from './coach-list/coach-list.component';
import { AddOrEditCoachComponent } from './add-or-edit-coach/add-or-edit-coach.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import { CoachFormComponent } from './coach-form/coach-form.component';
import { CoachDetailComponent } from './coach-detail/coach-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CoachListComponent,
    AddOrEditCoachComponent,
    PageNotFoundComponent,
    CoachFormComponent,
    CoachDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
