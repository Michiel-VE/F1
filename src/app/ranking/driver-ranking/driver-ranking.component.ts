import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-driver-ranking',
  templateUrl: './driver-ranking.component.html',
  styleUrls: ['./driver-ranking.component.css'],
})
export class DriverRankingComponent  {
  @Input() ranking: any = null;
}
