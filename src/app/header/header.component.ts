import { Component } from '@angular/core';
import { faHome, faMapMarkedAlt, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  faHome = faHome;
  faUser = faUser;
  faMap = faMapMarkedAlt;
  faTrophy = faTrophy;

}
