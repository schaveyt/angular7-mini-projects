import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerEvent } from '../events/server-event';

@Component({
  selector: 'app-cockpint',
  templateUrl: './cockpint.component.html',
  styleUrls: ['./cockpint.component.css']
})
export class CockpintComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<ServerEvent>();
  @Output()
  blueprintCreated = new EventEmitter<ServerEvent>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }
}
