import { Component } from '@angular/core';
import { faCalendarDay, faMedal, faMapMarkedAlt, faTrophy } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faMedal = faMedal;
  faCalender = faCalendarDay;
  faMap = faMapMarkedAlt;
  faTrophy = faTrophy;

}
