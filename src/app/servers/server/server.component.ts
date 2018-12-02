import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  editable: false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.initializeServer();

    this.route.queryParams.subscribe((queryParams: Params) => {
      const allowEdit = queryParams['allowEdit'];
      if (allowEdit && allowEdit === '1') {
        this.editable = true;
      } else {
        this.editable = false;
      }
    });
  }

  initializeServer() {
    const routeId = Number(this.route.snapshot.params['id']);
    this.server = this.serversService.getServer(routeId);
    this.route.params.subscribe((params: Params) => {
      const id = Number(params['id']);
      this.server = this.serversService.getServer(id);
    });
  }

  onEditServer() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
