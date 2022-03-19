import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  topThree = [];
  loading = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getTopThree();
  }

  private getTopThree(): void {
    //TODO fix type
    this.dataService.getTopThree().subscribe(
      (rankingData: any) => {
        this.topThree = rankingData.MRData.StandingsTable.StandingsLists[0]['DriverStandings'].splice(0, 3);
      },
    );
  }
}
