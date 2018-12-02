import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: Array<User>;

  constructor(private userService: UserService) {
    this.userService.updated.subscribe(() => { this.ngOnInit(); });
  }

  ngOnInit() {
    this.users = this.userService.users.filter(u => u.active);
  }

  onSetToInactive(user: User) {
    user.active = false;
    this.userService.userUpdated(user);
  }
}
