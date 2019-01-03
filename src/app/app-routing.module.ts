import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


// hold all the routes for the application
const appRoutes: Routes = [
  {
    path: '', // base_url/
    component: HomeComponent
  },
  {
    path: 'users', // base_url/users
    component: UsersComponent,
    children: [
      {
        path: ':id/:name', // base_url/users/1/fred
        component: UserComponent
      }
    ]
  },
  {
    path: 'servers', // base_url/servers
    component: ServersComponent,
    children: [
      {
        path: ':id', // base_url/servers/1
        component: ServerComponent
      },
      {
        path: ':id/edit', // base_url/servers/1/edit
        component: EditServerComponent
      }
    ]
  },
  {
    path: '404-page-not-found', // base_url/404-page-not-found
    component: PageNotFoundComponent,
  },
  {
    path: '**', // catch all undefined paths here
    redirectTo: '/404-page-not-found',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {

}
