import { Component, OnInit, Input } from '@angular/core';
import { HotelDashboardService } from '../hotel-dashboard.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: [HotelDashboardService]
})
export class ExpenseComponent implements OnInit {
  @Input() expenses: any[] = [];
  @Input() totalExpense = 0;
  constructor( private service: HotelDashboardService) { }

  ngOnInit() {

  }

}
