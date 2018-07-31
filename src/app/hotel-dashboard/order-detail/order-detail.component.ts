import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HotelDashboardService } from '../hotel-dashboard.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  providers: [ HotelDashboardService ]
})
export class OrderDetailComponent implements OnInit {
  order: any;
  orderLines: any[];
  constructor(
    public dialogRef: MatDialogRef<OrderDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public service: HotelDashboardService) { }

  ngOnInit() {
    this.order = this.data.order;
    this.service.getOrderLines().subscribe(orderLines => {
      this.orderLines = orderLines.data.filter( ol => ol.orderId === this.order._id);
    });
  }

  private onCloseClick(): void {
    this.dialogRef.close();
  }

}
