import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  @Input() lastName = '';
  @Input() firstName = '';
  @Input() code = '';
  @Input() number = '';
  @Input() age = '';
  @Input() nationality = '';


  constructor() { }

  ngOnInit(): void {
  }

}
