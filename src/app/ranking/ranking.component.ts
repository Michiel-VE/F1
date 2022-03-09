import { Component, OnInit } from '@angular/core';
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  rankingArr = []

  constructor(private data: DataService) { }

  ngOnInit(): void {
    const data = localStorage.getItem('rankingsList')

    this.rankingArr = data !== null ? JSON.parse(data) : [];

    if (this.rankingArr.length === 0){
      this.data.getRanking();
      this.rankingArr = this.data.rankingsList;
    }
  }
}
