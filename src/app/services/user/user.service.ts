import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_CONFIG } from 'src/app/app-config';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private basePath: string = APP_CONFIG?.ApiBaseUrl;
  private methodPath: string = 'users/';

  constructor(private httpClient: HttpClient) { }

  getUser(username: string): Observable<User> {
    return this.httpClient.get<User>(
      this.basePath + this.methodPath + username
    )
  }
}
