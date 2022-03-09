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

  constructor(private data: DataService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('driversList')

    this.drivers = data !== null ? JSON.parse(data) : [];

    if (this.drivers.length === 0){
      console.log("got data in drivers")

      this.data.getDrivers();
      this.drivers = this.data.driversList;
    }
  }

}
