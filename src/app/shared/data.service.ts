import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {
  }

  //TODO fix type
  getDrivers(): any {
    return this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear() - 1}/drivers.json`);
  }

  getRaces(): any {
    return this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear()}/races.json`);
  }

  getRanking(): any {
    return this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear() - 1}/driverStandings.json`);
  }

  getTopThree(): any {
    return this.http.get<any>(`https://ergast.com/api/f1/${new Date().getFullYear() - 1}/driverStandings.json`);
  }
}
