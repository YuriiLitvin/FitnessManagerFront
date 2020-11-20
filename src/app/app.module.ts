import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {CoachListComponent} from './coach-list/coach-list.component';
import { AddOrEditCoachComponent } from './add-or-edit-coach/add-or-edit-coach.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
