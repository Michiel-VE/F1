import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { DriverWithTeam } from '../../../interfaces/driverWithTeam';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent implements OnInit, OnChanges {
  driver?: DriverWithTeam;
  passedRaces?: number;
  @Input() driverId: number | undefined;
  isLoading = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.updateDriver(this.driverId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateDriver(this.driverId);

  }

  private getDriverWithTeam(id: number): void {
    this.isLoading = true;
    this.dataService.getDriverWithTeam(id).subscribe((driver: DriverWithTeam) => {
      this.driver = driver;
      this.isLoading = false;
    });
  }

  private getPassedRaces(): void {
    this.dataService.getPassedRaces().subscribe((passedRaces: number) => {
      this.passedRaces = passedRaces;
    });
  }

  private updateDriver(id: number | undefined): void {
    if (id) {
      this.getDriverWithTeam(id);
    }
    this.getPassedRaces();
  }


}
