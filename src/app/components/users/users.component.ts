import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users/users.service';

const MAX_RESULTS: number = 10;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users = {} as Users;
  
  constructor(private readonly usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers('arnau').subscribe(response => {
      this.users = response;
    });
  }

}
