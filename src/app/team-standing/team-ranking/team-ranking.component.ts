import { Component, Input } from '@angular/core';

import { Team } from '../../../interfaces/team';

@Component({
  selector: 'app-team-ranking',
  templateUrl: './team-ranking.component.html',
  styleUrls: ['./team-ranking.component.css'],
})
export class TeamRankingComponent {
  @Input() team!: Team;
  @Input() place = 0;
}
