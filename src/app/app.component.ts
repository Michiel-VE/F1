import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';

import { fader } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fader],
})

export class AppComponent {
  title = 'F1';

  prepareRoute(outlet: RouterOutlet): Data {
    return outlet && outlet.activatedRouteData;
  }
}
