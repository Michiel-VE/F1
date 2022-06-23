import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCalendarDay,
  faMedal,
  faMapMarkedAlt,
  faTrophy,
  faEdit,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

import { LoginService } from '../shared/login.service';

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
  faEdit = faEdit;
  faLogout = faArrowRight;


  constructor(private loginService: LoginService) {
  }

  logout(): void {
    this.loginService.logout();
  }

  checkRole(): boolean {
    return this.loginService.hasRole('ROLE_OWNER');
  }
}
