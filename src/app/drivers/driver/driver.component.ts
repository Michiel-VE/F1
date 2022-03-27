import { Component, Input } from '@angular/core';

import { Driver } from '../../../interfaces/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent {
  @Input() driver!: Driver;
}
