import { HotelDashboardService } from './../hotel-dashboard.service';
import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../../interface/order.interface';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css'],
  providers: [HotelDashboardService]
})
export class OrderStatusComponent implements OnInit {
  @Input() orders: Order[];
  @Input() total = 0;
  constructor( private service: HotelDashboardService) { }

  ngOnInit() {
  }

}
