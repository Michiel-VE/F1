import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Driver } from '../../../interfaces/driver';
import { DriverWithTeam } from '../../../interfaces/driverWithTeam';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent implements OnInit {
  driver?: DriverWithTeam;
  passedRaces?: number;
  faArrow = faArrowLeft;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.queryParamMap.get('driverNumber');
    if (id){
    this.getDriverWithTeam(id);
    }
    this.getPassedRaces();
  }

  private getDriverWithTeam(id: string): void {
    this.dataService.getDriverWithTeam(id).subscribe((driver: DriverWithTeam) => {
      console.log(driver);
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
