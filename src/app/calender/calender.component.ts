import { Component, OnInit } from '@angular/core';

import { Race } from '../../interfaces/race';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent implements OnInit {
  calender: Race[] = [];
  isLoading = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getRaces();

  }

  private getRaces(): void {
    this.dataService.getCalender().subscribe((calenderData: Race[]) => {
      this.calender = calenderData;
      this.isLoading = false;
    });
  }

}
