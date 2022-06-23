import { Component, OnInit } from '@angular/core';

import { Driver } from '../../interfaces/driver';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  drivers!: Driver[];


  constructor(private driverService: DataService) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe((drivers: Driver[]) => {
      this.drivers = drivers;
    });
  }

}
