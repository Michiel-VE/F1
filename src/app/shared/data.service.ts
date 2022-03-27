import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Driver } from '../../interfaces/driver';
import { Race } from '../../interfaces/race';


@Injectable({ providedIn: 'root' })
export class DataService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.baseUrl}/drivers`);
  }

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(`${this.baseUrl}/races`);
  }

  getTopThree(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.baseUrl}/ranking`);
  }
}
