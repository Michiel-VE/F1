import { Component, Input } from '@angular/core';

import { Driver } from '../../../interfaces/driver';
import { Team } from '../../../interfaces/team';

@Component({
  selector: 'app-team-ranking',
  templateUrl: './team-ranking.component.html',
  styleUrls: ['./team-ranking.component.css'],
})
export class TeamRankingComponent {
  @Input() team!: Team;

  getDriverPoints(): number {
    return  this.team.drivers.reduce((totalPoints: number, driver: Driver) => totalPoints + driver.points, 0);
  }
}
