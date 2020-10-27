import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{CardComponent} from './card/card.component';
import {CoachListComponent} from './coachList/coachList.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CoachListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
