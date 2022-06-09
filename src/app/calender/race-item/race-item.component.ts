import { Component, Input } from '@angular/core';

import { Race } from '../../../interfaces/race';

@Component({
  selector: 'app-race-item',
  templateUrl: './race-item.component.html',
  styleUrls: ['./race-item.component.css'],
})
export class RaceItemComponent {
  @Input() race!: Race;

  getUsersTimezone(raceDate: Date): string {
    const date = new Date(raceDate);
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return date.toLocaleTimeString('nl-BE', { timeZone });
  }
}
