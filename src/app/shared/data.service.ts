import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class DataService {
  driversList = [];
  racesList = [];
  rankingsList = [];

  constructor(private http: HttpClient) {
  }

  getDrivers(){
    this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear()-1}/drivers.json`).subscribe(driverData => {
      this.driversList = driverData.MRData.DriverTable.Drivers;
      localStorage.setItem('driversList', JSON.stringify(this.driversList));
    })
  }

  getRaces(){
    this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear()}/races.json`).subscribe(raceData => {
      this.racesList = raceData.MRData.RaceTable.Races;
      localStorage.setItem('racesList', JSON.stringify(this.racesList));
    })
  }

  getRanking(){
    this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear()-1}/driverStandings.json`).subscribe(rankingData => {
      this.rankingsList = rankingData.MRData.StandingsTable.StandingsLists[0]['DriverStandings'];
      localStorage.setItem('rankingsList', JSON.stringify(this.rankingsList));
    })
  }

}
