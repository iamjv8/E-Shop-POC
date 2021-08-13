import { Component, OnDestroy, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';
import { MappingService } from 'src/app/mapping/mapping.service';
import { AuthMappingService } from 'src/app/mapping/services/auth-mapping.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  loginRequestSubscription: any = {} ;
  @ViewChild(SpinnerComponent) spinner: SpinnerComponent | undefined;
  constructor(
    private authService : AuthService,
    private router: Router,
    private authMapping: AuthMappingService
  ) { }

  onSubmit(){
    this.spinner?.showSpinner();
    const requestBody = this.authMapping.loginRequest(this.loginForm.value);
    this.loginRequestSubscription  = this.authService.login(requestBody).subscribe((response: any) => {
      this.spinner?.hideSpinner();
      if(response.token) {
        localStorage.setItem('token', response.token);
        this.router.navigateByUrl('/product/list');
      }
    });
  }

  ngOnDestroy() {
    this.loginRequestSubscription.unsubscribe();
  }

}
