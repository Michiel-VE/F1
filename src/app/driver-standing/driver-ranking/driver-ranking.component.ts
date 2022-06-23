import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Driver } from '../../../interfaces/driver';

@Component({
  selector: 'app-driver-ranking',
  templateUrl: './driver-ranking.component.html',
  styleUrls: ['./driver-ranking.component.css'],
})
export class DriverRankingComponent {
  @Input() driver!: Driver;
  @Input() driverId: number | undefined;
  @Output() displayDriver: EventEmitter<number> = new EventEmitter<number>();

  showDriver(driver: number): void{
    this.displayDriver.emit(driver);
  }

  screenWidth(): boolean{
    const screenWidth = screen.width;
    return screenWidth <= 640;

  }
}
