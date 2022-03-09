import {Component, OnInit} from '@angular/core';
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  topRanking = []


  constructor(private data: DataService) {
  }

  ngOnInit(): void {
    const dataDriver = localStorage.getItem('driversList');
    const dataRace = localStorage.getItem('racesList');
    const dataRanking = localStorage.getItem('rankingsList');

    if (dataDriver === null) {
      this.data.getDrivers();
    }

    if (dataRace === null) {
      this.data.getRaces();
    }

    if (dataRanking === null) {
      this.data.getRanking();

      this.topRanking = this.data.rankingsList;
      console.log(this.topRanking = this.topRanking.slice(0,3));
    }


    this.clearData();
  }

  private clearData() {
    setTimeout(() => {
      localStorage.clear();
      console.log("deleting")
    }, 120000)
  }

}
