import { Injectable } from '@angular/core';

@Injectable()
export class AuthMappingService {

  constructor() { }

  loginRequest(loginFormDetails: any) {
    return {
      username: loginFormDetails.username,
      password: loginFormDetails.password,
    }
  }
}
