import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
   users: Array<User>;

  constructor(private userService: UserService) {
    this.userService.updated.subscribe(() => { this.ngOnInit(); });
  }

  ngOnInit() {
    this.users = this.userService.users.filter(u => !u.active);
  }

  onSetToActive(user: User) {
    user.active = true;
    this.userService.userUpdated(user);
  }
}
