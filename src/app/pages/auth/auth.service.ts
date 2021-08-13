import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,) { }

  login(body: any) {
    return this.http.post(`${environment.apiUrl}/auth/login`, body).pipe(
      map((resp) => {
        return resp;
      })
    );
  }
}
