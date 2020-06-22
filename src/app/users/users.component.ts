import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { UserService } from '../services/user.service';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  rowColIndex: number;

  displayedColumns: string[] = ['id', 'first_name', 'last_name'];

  users: User[];
  dataSource: User[];

  searchTxt = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.userService.getUsers().subscribe(res => {
       this.users = res['result'];
       this.dataSource = this.users;
    }
  );
  }




}
