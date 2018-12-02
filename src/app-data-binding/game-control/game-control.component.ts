import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  private counter = 0;
  private timer: any;

  @Output()
  counterChanged = new EventEmitter<{counter: number}>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.onStopGame();
    this.timer = setInterval(() => this.fireCounterChanged(), 500);
  }

  onStopGame() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  fireCounterChanged() {
    this.counter++;
    this.counterChanged.emit({counter: this.counter});
  }

}
