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
  expenses: any[];
  totalExpense: Number = 0;
  sum: Number = 0;
  constructor(
    private service: HotelDashboardService
  ) { }

  ngOnInit() {
    this.service.getRooms().subscribe(
      res => {
        this.rooms = res;
        this.vacant = res.filter(r => r.status === '1').length;
        this.occupied = res.filter(r => r.status === '0').length;
        this.dirty = res.filter(r => r.status === '2').length;
        this.rooms.forEach(room => {
          switch (room.status) {
            case '0': room.status = 'Có Khách'; break;
            case '1': room.status = 'Trống' ; break;
            case '2': room.status = 'Dơ' ; break;
            default: room.status = '';
          }
        });
        this.service.getOrders().subscribe( orders => {
          this.orders = orders
            .filter((o: Order) => o.total !== 0 &&
              new Date(o.checkOutTime.$date).getDate() === new Date().getDate() &&
              new Date (o.checkOutTime.$date).getMonth() === new Date().getMonth() &&
              new Date (o.checkOutTime.$date).getFullYear() === new Date().getFullYear());
          this.orders.forEach( o => {
            this.total = +this.total + +o.total;
          });
        });
        this.service.getExpense().subscribe(expenses => {
          this.expenses = expenses
            .filter(e => new Date(e.createdAt.$date).getDate() === new Date().getDate() &&
              new Date(e.createdAt.$date).getMonth() === new Date().getMonth() &&
              new Date(e.createdAt.$date).getFullYear() === new Date().getFullYear());
          this.expenses.forEach(e => {
            this.totalExpense = +this.totalExpense + +e.amount;
          });
        });
        this.sum = +this.total + +this.totalExpense;
      }
    );
  }

}
