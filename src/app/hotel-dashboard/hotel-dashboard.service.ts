import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Room } from '../../interface/room.interface';
import { Order } from '../../interface/order.interface';
import { Response } from '../../interface/response.interface';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

const baseURI = `https://server.localtunnel.me/api`;
@Injectable()
export class HotelDashboardService {

  constructor(
    private http: HttpClient
  ) { }
  getRooms(): Observable<any> {
    const roomURI = `${baseURI}/room`;
    return this.http.get<any>(roomURI);
  }
  getOrders(): Observable<any> {
    const orderURI = `${baseURI}/order`;
    return this.http.get<any>(orderURI);
  }

  getExpense(): Observable<any> {
    const expenseURI = `${baseURI}/expense`;
    return this.http.get<any>(expenseURI);
  }

  getOrderLines(): Observable<any> {
    const orderLineURI = `${baseURI}/orderline`;
    return this.http.get<any>(orderLineURI);
  }

  getServices(): Observable<any> {
    const serviceURI = `${baseURI}/service`;
    return this.http.get<any>(serviceURI);
  }
}

