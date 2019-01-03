import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  isAuthenticated(): Promise<boolean> {
    // simulate some time to fake like we are reaching out to a remote service for authentication...
    //
    const promise = new Promise<boolean>( (resolve, reject) => {
        // resolve the promise after 800 ms.
        //
        setTimeout( () => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
