import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent {
  faSearch = faSearch;
  username = new FormControl('');

  constructor(private readonly router: Router) { }

  searchUsers() {
    this.router.navigate(['/users', this.username.value]);
  }

}
