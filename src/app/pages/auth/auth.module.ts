import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { CommonComponentsModule } from 'src/app/components/common-components.module';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CommonComponentsModule,
    RouterModule.forChild(routes)
  ],
  providers:[AuthService],
  exports: [RouterModule],
})
export class AuthModule { }
