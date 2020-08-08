import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StartPageV2Module} from './../../projects/start-page-v2/src/lib/start-page-v2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartPageV2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
