import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-driver-ranking',
  templateUrl: './driver-ranking.component.html',
  styleUrls: ['./driver-ranking.component.css']
})
export class DriverRankingComponent implements OnInit {
  @Input() ranking: any = null

  constructor() { }

  ngOnInit(): void {
  }

}
