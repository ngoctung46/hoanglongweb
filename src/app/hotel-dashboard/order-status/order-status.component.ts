import { HotelDashboardService } from './../hotel-dashboard.service';
import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../interface/order.interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrderDetailComponent } from '../order-detail/order-detail.component';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css'],
  providers: [HotelDashboardService]
})
export class OrderStatusComponent implements OnInit {
  @Input() orders: Order[];
  @Input() total = 0;
  @Input() date: Date;
  constructor( private service: HotelDashboardService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(order: Order) {
    const dialogRef = this.dialog.open(OrderDetailComponent, {
      width: '750px',
      data: {order: order}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
