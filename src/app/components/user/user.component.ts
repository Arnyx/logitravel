import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = {} as User;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let username: string = params['username'];
      this.userService.getUser(username).subscribe(response => {
        this.user = response;
      })
    })
  }

}
