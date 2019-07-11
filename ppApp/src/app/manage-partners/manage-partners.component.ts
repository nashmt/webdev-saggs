import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-manage-partners',
  templateUrl: './manage-partners.component.html',
  styleUrls: ['./manage-partners.component.css']
})
export class ManagePartnersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(partners => this.users = partners);
  }
}
