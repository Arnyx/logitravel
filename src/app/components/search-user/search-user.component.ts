import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ErrorService } from 'src/app/services/error/error.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  faSearch = faSearch;
  username = new FormControl('');

  constructor(
    private readonly router: Router,
    private readonly errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.username = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      this.forbiddenNameValidator(/logitravel/i)
    ])
  }

  searchUsers() {
    if (this.username.valid) {
      this.router.navigate(['/users', this.username.value]);
    } else {
      this.errorService.showError("Invalid username");
    }
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {forbiddenName: {value: control.value}} : null;
    };
  }

}
