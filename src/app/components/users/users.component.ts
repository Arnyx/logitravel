import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users';
import { ErrorService } from 'src/app/services/error/error.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  username: string = '';
  users = {} as Users;
  
  constructor(
    private readonly usersService: UsersService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.username = params['username'];
      if (!this.username) 
        return;

      this.usersService.getUsers(this.username).subscribe(
        response => {
          this.users = response;
        },
        error => {
          this.errorService.showError(error);
        }
      );
    });
  }

}
