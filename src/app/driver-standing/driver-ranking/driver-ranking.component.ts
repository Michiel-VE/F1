import { Component, Input } from '@angular/core';

import { Driver } from '../../../interfaces/driver';

@Component({
  selector: 'app-driver-ranking',
  templateUrl: './driver-ranking.component.html',
  styleUrls: ['./driver-ranking.component.css'],
})
export class DriverRankingComponent {
  @Input() driver!: Driver;
  @Input() place = 0;
}
