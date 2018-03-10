import { TestBed, inject } from '@angular/core/testing';

import { HotelDashboardService } from './hotel-dashboard.service';

describe('HotelDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelDashboardService]
    });
  });

  it('should be created', inject([HotelDashboardService], (service: HotelDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
