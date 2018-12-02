import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.initializeServer();
  }

  initializeServer() {
    const routeId = Number(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(routeId);
    this.route.params.subscribe((params: Params) => {
      const id = Number(params['id']);
      this.server = this.serversService.getServer(id);
    });
  }

}
