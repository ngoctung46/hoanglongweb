import { Component, OnInit } from '@angular/core';
import { HotelDashboardService } from './hotel-dashboard.service';
import { Room } from '../../interface/room.interface';
import { Order } from '../../interface/order.interface';
import { Response } from '../../interface/response.interface';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html',
  styleUrls: ['./hotel-dashboard.component.css'],
  providers: [ HotelDashboardService ]
})
export class HotelDashboardComponent implements OnInit {
  rooms: Room[] = [];
  orders: Order[] = [];
  occupied: Number;
  vacant: Number;
  dirty: Number;
  total: Number = 0;
  constructor(
    private service: HotelDashboardService
  ) { }

  ngOnInit() {
    this.service.getRooms().subscribe(
      res => {
        this.rooms = res.data;
        this.vacant = res.data.filter(r => r.status === '1').length;
        this.occupied = res.data.filter(r => r.status === '0').length;
        this.dirty = res.data.filter(r => r.status === '2').length;
        this.service.getOrders().subscribe( orders => {
          this.orders = orders.data;
          this.orders.forEach(element => {
            element.roomId = this.rooms.find(r => element.roomId === r._id).name;
          });
          this.total = this.orders.reduce(add, 0);
          function add(a, b) {
              return +a.total + +b.total;
          }
        });
      }
    );
   
  }

}
