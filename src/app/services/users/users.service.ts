import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG } from 'src/app/app-config';
import { Users } from 'src/app/models/users';

const MAX_RESULTS: number = 10;

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private basePath: string = `${APP_CONFIG?.ApiBaseUrl}`;
  private methodPath: string = 'search/users';
  
  constructor(private httpClient: HttpClient) { }

  getUsers(username: string): Observable<Users> {
    const params = new HttpParams().set('q', username);
    return this.httpClient.get<Users>(
      this.basePath + this.methodPath, 
      { params: params }
    ).pipe(map((response: Users) => {
      response.items = response.items.slice(0, MAX_RESULTS);
      return response;
    }));
  }
}
