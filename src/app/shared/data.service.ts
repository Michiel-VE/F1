import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Driver } from '../../interfaces/driver';
import { DriverWithTeam } from '../../interfaces/driverWithTeam';
import { Race } from '../../interfaces/race';
import { Team } from '../../interfaces/team';


@Injectable({ providedIn: 'root' })
export class DataService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.baseUrl}/drivers`);
  }

  getDriver(id: number): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/driver/${id}`);
  }

  getDriverWithTeam(id: number): Observable<DriverWithTeam> {
    let params = new HttpParams();
    params = params.append('driverNumber', id);
    return this.http.get<DriverWithTeam>(`${this.baseUrl}/driver`, { params });
  }

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(`${this.baseUrl}/races`);
  }

  getPassedRaces(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/passedRaces`);
  }

  getCalender(): Observable<Race[]> {
    return this.http.get<Race[]>(`${this.baseUrl}/calender`);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.baseUrl}/teams`);
  }

  updateDriver(driver: Driver, id: number): Observable<Driver> {
    return this.http.put<Driver>(`${this.baseUrl}/edit/driver/${id}`, driver);
  }
}
