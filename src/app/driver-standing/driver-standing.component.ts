import { Component, OnInit } from '@angular/core';

import { Driver } from '../../interfaces/driver';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-driver-standing',
  templateUrl: './driver-standing.component.html',
  styleUrls: ['./driver-standing.component.css'],
})
export class DriverStandingComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getDriverRanking();
  }

  private getDriverRanking(): void {
    this.dataService.getDrivers().subscribe((driverRankingData: Driver[]) => {
      this.drivers = driverRankingData;
    });
  }

}
