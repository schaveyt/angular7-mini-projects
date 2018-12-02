import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Server } from '../models/server';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input()
  element: Server;

  @Output()
  deleted  = new EventEmitter<{name: string}>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.deleted.emit({name: this.element.name});
  }

}
