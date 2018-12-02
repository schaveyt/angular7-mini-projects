import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: { id: number, name: string } = {id: -1, name: ''};

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    // Use the snapshot feature of the route to initialize the component based on the route parameters
    //
    this.updatedUser(
      this.route.snapshot.params['id'],
      this.route.snapshot.params['name']
    );

    // If the component active on the screen and the route changes, then we must subscribe to changes made to
    // changes made to the route.
    //
    this.route.params.subscribe((params: Params) => {
      this.updatedUser(
        params['id'],
        params['name']
      );
    });

  }

  updatedUser(id: number, name: string) {
    this.user.id = id;
    this.user.name = name;
  }

}
