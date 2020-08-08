import { NgModule } from '@angular/core';
import { StartPageV2Component } from './start-page-v2.component';
import { StartPageComponent } from './start-page/start-page.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [StartPageV2Component, StartPageComponent],
  imports: [
    CommonModule
  ],
  exports: [StartPageV2Component,StartPageComponent]
})
export class StartPageV2Module { }
