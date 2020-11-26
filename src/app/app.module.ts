import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EditCoachComponent } from './edit-coach/edit-coach.component';
import { AddCoachComponent } from './add-coach/add-coach.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditCoachComponent,
    AddCoachComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
