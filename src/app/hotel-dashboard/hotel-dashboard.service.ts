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

const baseURI = `http://localhost:3000/api`;
@Injectable()
export class HotelDashboardService {

  constructor(
    private http: HttpClient
  ) { }
  getRooms(): Observable<Response> {
    const roomURI = `${baseURI}/room`;
    return this.http.get<Response>(roomURI);
  }
  getOrders(): Observable<Response> {
    const orderURI = `${baseURI}/order`;
    return this.http.get<Response>(orderURI);
  }
}

