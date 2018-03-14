import { Component, OnInit } from '@angular/core';
import { HotelDashboardService } from './hotel-dashboard.service';
import { Room } from '../../interface/room.interface';
import { Order } from '../../interface/order.interface';
import { Response } from '../../interface/response.interface';
import { Observable } from 'rxjs/Observable';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-hotel-dashboard',
  templateUrl: './hotel-dashboard.component.html',
  styleUrls: ['./hotel-dashboard.component.css'],
  providers: [HotelDashboardService]
})

export class HotelDashboardComponent implements OnInit {
  rooms: Room[] = [];
  orders: Order[] = [];
  occupied: Number;
  vacant: Number;
  dirty: Number;
  total = 0;
  expenses: any[];
  totalExpense = 0;
  date: Date = new Date();
  events: string[] = [];
  constructor(
    private service: HotelDashboardService
  ) { }

  ngOnInit() {
    this.populateData();
  }

  private getOrders(): void {
    this.service.getOrders().subscribe(orders => {
      this.orders = orders
        .filter((o: Order) => o.total !== 0 &&
          new Date(o.checkOutTime.$date).getDate() === this.date.getDate() &&
          new Date(o.checkOutTime.$date).getMonth() === this.date.getMonth() &&
          new Date(o.checkOutTime.$date).getFullYear() === this.date.getFullYear());
      this.orders.forEach(o => {
        this.total = +this.total + +o.total;
      });
    });
  }

  private getExpenses(): void {
    this.service.getExpense().subscribe(expenses => {
      this.expenses = expenses
        .filter(e => new Date(e.createdAt.$date).getDate() === this.date.getDate() &&
          new Date(e.createdAt.$date).getMonth() === this.date.getMonth() &&
          new Date(e.createdAt.$date).getFullYear() === this.date.getFullYear());
      this.expenses.forEach(e => {
        this.totalExpense = +this.totalExpense + +e.amount;
      });
    });
  }

  private populateData() {
    this.total = 0;
    this.totalExpense = 0;
    this.getOrders();
    this.getExpenses();
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
    console.log(this.date);
    this.populateData();
  }
}



