import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<User> = [];
  updated = new EventEmitter<void>();

  constructor() { }

  addUser(user: User) {
    user.id = this.users.length;
    this.users.push(user);
  }

  userUpdated(user: User) {
    if (user && user.id > -1) {
      this.users[user.id].active = user.active;
      this.updated.emit();
    }
  }
}
