import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Driver } from '../../../interfaces/driver';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent implements OnInit {
  driver?: Driver;
  driverId?: number;
  passedRaces?: number;
  faArrow = faArrowLeft;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id){
    this.getDriver(id);
    }
    this.getPassedRaces();
  }

  private getDriver(id: string): void {
    this.dataService.getDriver(id).subscribe((driver: Driver) => {
      this.driver = driver;
    });
  }

  private getPassedRaces(): void {
    this.dataService.getPassedRaces().subscribe((passedRaces: number) => {
      this.passedRaces = passedRaces;
    });
  }

  back(): void{
    history.back();
  }

}
