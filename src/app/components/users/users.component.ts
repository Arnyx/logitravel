import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Users } from 'src/app/models/users';
import { ErrorService } from 'src/app/services/error/error.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = {} as Users;
  username = new FormControl('');
  
  constructor(
    private readonly usersService: UsersService,
    private readonly errorService: ErrorService
    ) { }

  searchUsers(): void {
    this.usersService.getUsers(this.username.value).subscribe(response => {
      this.users = response;
    });
  }

}
