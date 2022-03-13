import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../shared/data.service";

@Injectable()
@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers = []

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getDrivers()
  }

  private getDrivers(): void {
    this.dataService.getDrivers().subscribe(driverData => {
      this.drivers = driverData.MRData.DriverTable.Drivers;
    })
  }
}
