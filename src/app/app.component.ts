import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as sharedSelectors from '../app/root-store/shared-store/selectors';
import * as sharedActions from '../app/root-store/shared-store/actions';

import * as taskActions from '../app/root-store/task-store/actions';
import * as taskSelectors from '../app/root-store/task-store/selectors';
import * as projectActions from '../app/root-store/projects-store/actions';
import * as timesheetActions from '../app/root-store/timesheet-store/actions';
import { AuthService } from './shared/services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title$ = this.store$.select(sharedSelectors.selectTtile);
  activeTask$ = this.store$.select(taskSelectors.getActiveTask);
  loggedUser$ = this.store$.select(sharedSelectors.selectLoggedInUser);
  constructor(private store$: Store<any>, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // Get loggedUser from localStorage on refresh
    let user = this.authService.getUser();
    this.store$.dispatch(sharedActions.setLoggedUser({user}));
    this.store$.dispatch(taskActions.loadDataRequest());
    this.store$.dispatch(projectActions.loadDataRequest());
    this.store$.dispatch(taskActions.getActiveTaskRequest());
    this.store$.dispatch(timesheetActions.loadTimesheetRequest({ date: new Date }));
  }

  openActiveTask(id: string | undefined) {
    this.router.navigate([`tabs/task/details/${id}`])
 }

 logout() {
  this.authService.logout();
  this.router.navigate([`login`])
  this.store$.dispatch(sharedActions.setLoggedUser({user: null}));
 }
}
