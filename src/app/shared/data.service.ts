import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({providedIn: 'root'})
export class DataService {
  driversList = [];
  racesList = [];
  rankingsList = [];
  topList = [];

  constructor(private http: HttpClient) {
  }

  getDrivers() {
    return this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear() - 1}/drivers.json`)
  }

  getRaces() {
    return this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear()}/races.json`)
  }

  getRanking() {
    return this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear() - 1}/driverStandings.json`)
  }

  getTopThree() {
    return this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear() - 1}/driverStandings.json`)
  }

}
