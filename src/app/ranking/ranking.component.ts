import { Component, OnInit } from '@angular/core';

import { Driver } from '../../interfaces/driver';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  drivers: Driver[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getRanking();
  }

  private getRanking(): void {
    this.dataService.getDrivers().subscribe((rankingData: Driver[]) => {
      this.drivers = rankingData;
      console.log(this.drivers);
    });
  }

}
