import { Component, OnInit } from '@angular/core';

import { Driver } from '../../interfaces/driver';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})

export class DriversComponent implements OnInit {
  drivers = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getDrivers();
  }

  private getDrivers(): void {
    //TODO fix type
    this.dataService.getDrivers().subscribe((driverData: any) => {
      this.drivers = driverData.MRData.DriverTable.Drivers;
    });
  }
}
