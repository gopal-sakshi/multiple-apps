import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CricketSubApplication } from 'projects/cricket/src/app/app.module';
import { FootballSubApplication } from 'projects/football/src/app/app.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// https://stackoverflow.com/questions/47331791/add-variable-prefix-to-angular-routing

@NgModule({
  declarations: [
    AppComponent
  ],
  /*
  (A)
    you can inject one Angular module inside of another using the imports command.
    Here, we can see BrowserModule, ApproutingModule are injected using imports Array

  (B)
    In the same way, we will inject CricketSubApplication & FootballSubApplication

  */
  imports: [
    BrowserModule,
    AppRoutingModule,

    CricketSubApplication.forRoot(),
    FootballSubApplication.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
