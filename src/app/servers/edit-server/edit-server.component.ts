import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';

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
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
