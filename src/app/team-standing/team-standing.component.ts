import { Component, OnInit } from '@angular/core';

import { Team } from '../../interfaces/team';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-team-standing',
  templateUrl: './team-standing.component.html',
  styleUrls: ['./team-standing.component.css'],
})
export class TeamStandingComponent implements OnInit {
  teams: Team[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getTeamRanking();
  }

  private getTeamRanking(): void {
    this.dataService.getTeams().subscribe((teamRankingData: Team[]) => {
      this.teams = teamRankingData;
      console.log(this.teams);
    });
  };

}
