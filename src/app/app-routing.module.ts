import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Role } from '../interfaces/role.enum';
import { CalenderComponent } from './calender/calender.component';
import { DriverComponent } from './details/driver/driver.component';
import { DriverStandingComponent } from './driver-standing/driver-standing.component';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { MapComponent } from './races/map.component';
import { AuthGuard } from './security/auth.guard';
import { TeamStandingComponent } from './team-standing/team-standing.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ranking/drivers',
    pathMatch: 'full',
  },
  {
    path: 'races',
    component: MapComponent,
  },
  {
    path: 'calender',
    component: CalenderComponent,
  },
  {
    path: 'ranking',
    children: [
      {
        path: 'drivers',
        component: DriverStandingComponent,
      },
      {
        path: 'teams',
        component: TeamStandingComponent,
      },
    ],
  },
  {
    path: 'detail',
    children: [
      {
        path: 'driver',
        component: DriverComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'overview',
    component: OverviewComponent,
    canActivate: [AuthGuard],
    data: {
      role: [Role.OWNER],
    },
  },
  {
    path: '**',
    redirectTo: '/ranking/drivers',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
