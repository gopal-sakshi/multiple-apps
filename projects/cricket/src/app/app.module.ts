import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  // this wont work... because all modules are named as AppModule... it causes confusing in main application
    // so we will use another approach... we will use CricketApplication, which is just like a wrapper around AppModule

export class CricketSubApplication {
  static forRoot():ModuleWithProviders<CricketSubApplication> {
    return {
      ngModule:AppModule,
      providers:[]
    }
  }
}
