import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SharedState } from 'src/app/root-store/shared-store';
import { Store } from '@ngrx/store';
import * as sharedActions from '../../../root-store/shared-store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(
    private store$: Store<SharedState.State>,
    private authService: AuthService, 
    private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        const token = response.token;
        this.authService.setToken(token);
        this.errorMessage = null;
        this.router.navigate(["/tabs/home"])
        //save loggedinuser
        this.store$.dispatch(sharedActions.setLoggedUser({user: response.loggedUser}))
      },
      (error) => {
        this.errorMessage = 'Login failed. Please check your credentials.';
      }
    );
  }

}
