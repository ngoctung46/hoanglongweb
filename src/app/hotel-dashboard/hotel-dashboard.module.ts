import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelDashboardComponent } from './hotel-dashboard.component';
import { HotelDashboardService } from './hotel-dashboard.service';
import { RoomStatusComponent } from './room-status/room-status.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { ExpenseComponent } from './expense/expense.component';
import { RoomListComponent } from './room-list/room-list.component';
import { MaterialModulesModule } from './material-modules.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialModulesModule
  ],
  declarations: [HotelDashboardComponent, RoomStatusComponent, OrderStatusComponent, ExpenseComponent, RoomListComponent],
  providers: [ HotelDashboardService ],
  exports: [HotelDashboardComponent]
})
export class HotelDashboardModule { }
