import { Service } from './../../interface/service.inteface';
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
  services: Service[] = [];
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
    this.service.getOrders().subscribe(res => {
      this.orders = res.data
        .filter((o: Order) => new Date(o.checkOutTime).getDate() === this.date.getDate() &&
          new Date(o.checkOutTime).getMonth() === this.date.getMonth() &&
          new Date(o.checkOutTime).getFullYear() === this.date.getFullYear());
      this.orders.forEach(o => {
        this.total = +this.total + +o.total;
      });
    });
  }

  private getExpenses(): void {
    this.service.getExpense().subscribe(res => {
      this.expenses = res.data
        .filter(e => new Date(e.createdAt).getDate() === this.date.getDate() &&
          new Date(e.createdAt).getMonth() === this.date.getMonth() &&
          new Date(e.createdAt).getFullYear() === this.date.getFullYear());
      this.expenses.forEach(e => {
        this.totalExpense = +this.totalExpense + +e.amount;
      });
    });
  }

  private getServices(): void {
    this.service.getServices().subscribe(res => {
      this.services = res.data.filter(s => !s.isRoomRate);
    });
  }

  private populateData() {
    this.total = 0;
    this.totalExpense = 0;
    this.getOrders();
    this.getExpenses();
    this.getServices();
  }

  dateChange(event: MatDatepickerInputEvent<Date>) {
    this.date = event.value;
    console.log(this.date);
    this.populateData();
  }
}



