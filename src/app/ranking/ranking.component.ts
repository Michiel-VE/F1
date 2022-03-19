import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css'],
})
export class RankingComponent implements OnInit {
  rankings = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getRanking();
  }

  private getRanking(): void {
    //TODO fix type
    this.dataService.getRanking().subscribe((rankingData: any) => {
      this.rankings = rankingData.MRData.StandingsTable.StandingsLists[0]['DriverStandings'];
    });
  }

}
