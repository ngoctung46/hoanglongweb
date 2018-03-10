import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDashboardComponent } from './hotel-dashboard.component';
import { HotelDashboardService } from './hotel-dashboard.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HotelDashboardComponent],
  providers: [ HotelDashboardService ],
  exports: [HotelDashboardComponent]
})
export class HotelDashboardModule { }
