import { Component } from '@angular/core';
import { ServerEvent } from './events/server-event';
import { Server } from './models/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: Array<Server> = [
    {type: 'server', name: 'TestServer', content: 'Just a test'}
  ];


  onServerAdded(evt: ServerEvent) {
    this.serverElements.push({
      type: 'server',
      name: evt.name,
      content: evt.content
    });
  }

  onBlueprintAdded(evt: ServerEvent) {
    this.serverElements.push({
      type: 'blueprint',
      name: evt.name,
      content: evt.content
    });
  }

  onServerDeleted(evt: ServerEvent) {

    let index = -1;
    for (let i = 0; i < this.serverElements.length; i++) {
      if (this.serverElements[i].name === evt.name) {
        index = i;
      }
    }

    if (index === -1) {
      return;
    }

    if (index !== -1) {
      this.serverElements.splice(index, 1);
    }
  }
}
