import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  routeFragment = '';
  queryParams: string[] = [];

  constructor(private serversService: ServersService, private route: ActivatedRoute) {}

  ngOnInit() {
    const routeId = Number(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(routeId);
    if (this.server) {
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    } else {
      this.serverName = 'unknown';
      this.serverStatus = 'unknown';
    }

    this.routeFragment = this.route.snapshot.fragment;


    for (let key in this.route.snapshot.queryParams) {
      if (this.route.snapshot.queryParams.hasOwnProperty(key)) {
        this.queryParams.push(`key: '${key}' value: '${this.route.snapshot.queryParams[key]}'`);
      }
   }

  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
