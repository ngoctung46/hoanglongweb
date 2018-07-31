import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-report',
  templateUrl: './service-report.component.html',
  styleUrls: ['./service-report.component.css']
})
export class ServiceReportComponent implements OnInit {
  @Input() services: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
