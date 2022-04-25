import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Driver } from '../../interfaces/driver';
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

  getDriver(id: string): Observable<Driver> {
    return this.http.get<Driver>(`${this.baseUrl}/driver/${id}`);
  }

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(`${this.baseUrl}/races`);
  }

  getPassedRaces(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/passedRaces`);
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.baseUrl}/teams`);
  }
}
