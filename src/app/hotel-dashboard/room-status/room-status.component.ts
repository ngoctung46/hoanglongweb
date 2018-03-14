import { Component, OnInit, Input } from '@angular/core';
import { HotelDashboardService } from '../hotel-dashboard.service';

@Component({
  selector: 'app-room-status',
  templateUrl: './room-status.component.html',
  styleUrls: ['./room-status.component.css'],
  providers: [HotelDashboardService]
})
export class RoomStatusComponent implements OnInit {
  @Input() vacant = 0;
  @Input() occupied = 0;
  @Input() dirty = 0;
  @Input() total = 0;
  @Input() totalExpense = 0;
  rooms: any[];
  constructor(private service: HotelDashboardService) { }

  ngOnInit() {
    this.getStatus();
  }
  private getStatus(): void {
    this.service.getRooms().subscribe(
      res => {
        this.rooms = res;
        this.vacant = res.filter(r => r.status === '1').length;
        this.occupied = res.filter(r => r.status === '0').length;
        this.dirty = res.filter(r => r.status === '2').length;
        this.rooms.forEach(room => {
          switch (room.status) {
            case '0': room.status = 'Có Khách'; break;
            case '1': room.status = 'Trống'; break;
            case '2': room.status = 'Dơ'; break;
            default: room.status = '';
          }
        });
      });
  }
}
