import { Component } from '@angular/core';
import { UserService } from './services/user-service.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService) {
    userService.addUser(new User('Max', true));
    userService.addUser(new User('Anna', true));
    userService.addUser(new User('Chris', false));
    userService.addUser(new User('Manu', false));
  }

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
