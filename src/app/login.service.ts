import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginViewModel } from './login-view-model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  urlPrefix: string = 'http://localhost:9090';

  constructor(private httpClient: HttpClient) {}

  currentUserName: any = null;

  public Login(loginViewModel: LoginViewModel): Observable<any> {
    return this.httpClient
      .post<any>(this.urlPrefix + '/authenticate', loginViewModel, {
        responseType: 'json',
      })
      .pipe(
        map((user) => {
          if (user) {
            this.currentUserName = user.userName;
            // sessionStorage is used to receive and store a token
            sessionStorage['currentUser'] = JSON.stringify(user);
          }
          return user;
        })
      );
  }

  public Logout() {
    sessionStorage.removeItem('currentUser');
    this.currentUserName = null;
  }
}
