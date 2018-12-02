import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counters = Array<number>();
  onCounterChanged(evt: {counter: number}) {
    console.log(evt.counter);
    this.counters.push(evt.counter);
  }
}
