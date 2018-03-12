import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Room } from '../../interface/room.interface';
import { Order } from '../../interface/order.interface';
import { Response } from '../../interface/response.interface';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const baseURI = `https://api.mlab.com/api/1/databases/hoanglong/collections`;
const apiKey = `oACmHhkBLWP1cJKQpX-rrA88rgsHROS6`;
@Injectable()
export class HotelDashboardService {

  constructor(
    private http: HttpClient
  ) { }
  getRooms(): Observable<any[]> {
    const roomURI = `${baseURI}/rooms?apiKey=${apiKey}`;
    return this.http.get<any[]>(roomURI);
  }
  getOrders(): Observable<any[]> {
    const orderURI = `${baseURI}/orders?apiKey=${apiKey}`;
    return this.http.get<any[]>(orderURI);
  }

  getExpense(): Observable<any[]> {
    const expenseURI = `${baseURI}/expenses?apiKey=${apiKey}`;
    return this.http.get<any[]>(expenseURI);
  }
}

