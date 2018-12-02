import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';

// hold all the routes for the applications
const AppRoutes: Routes = [
  {
    path: '', // base_url/
    component: HomeComponent
  },
  {
    path: 'users', // base_url/users
    component: UsersComponent
  },
  {
    path: 'users/:id/:name', // base_url/users/1/fred
    component: UserComponent
  },
  {
    path: 'servers', // base_url/servers
    component: ServersComponent
  },
  {
    path: 'servers/:id/edit', // base_url/servers
    component: ServersComponent
  },
];

export { AppRoutes };
