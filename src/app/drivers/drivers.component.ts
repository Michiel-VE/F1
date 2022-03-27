import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { Driver } from '../../interfaces/driver';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})

export class DriversComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getDrivers();
  }

  private getDrivers(): void {
    this.dataService
      .getDrivers()
      .subscribe((driverData: Driver[]) => {
      this.drivers = driverData;
    });
  }
}
