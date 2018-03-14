import { MaterialModulesModule } from './hotel-dashboard/material-modules.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelDashboardModule } from './hotel-dashboard/hotel-dashboard.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModulesModule,
    HotelDashboardModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'vi'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
