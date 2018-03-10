import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HotelDashboardModule } from './hotel-dashboard/hotel-dashboard.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HotelDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
