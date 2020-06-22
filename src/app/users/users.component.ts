import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  searchTxt = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.userService.getUsers().subscribe(res => {
       this.users = res['result'];
    }
  );
  }




}
