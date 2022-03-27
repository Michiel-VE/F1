import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { Driver } from '../../interfaces/driver';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  topThree: Driver[] = [];
  loading = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getTopThree();
  }

  private getTopThree(): void {
    this.dataService
      .getTopThree()
      .pipe(take(1))
      .subscribe((rankingData: Driver[]) => {
          this.topThree = rankingData;
        },
      );
  }
}
