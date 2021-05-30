import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { ErrorService } from 'src/app/services/error/error.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = {} as User;
  username: string = '';
  userLoaded: boolean = false;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UsersService,
    private readonly errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.username = params['username'];
      this.usersService.getUser(this.username).subscribe(
        response => {
          this.user = response;
        },
        error => {
          this.errorService.showError(error.error.message);
        },
        () => {
          this.userLoaded = true;
        }
      )
    })
  }

}