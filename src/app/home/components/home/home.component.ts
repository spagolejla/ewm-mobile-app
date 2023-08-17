import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as taskActions from '../../../root-store/task-store/actions';
import * as taskSelectors from '../../../root-store/task-store/selectors';
import * as timesheetSelectors from '../../../root-store/timesheet-store/selectors';

import * as sharedActions from '../../../root-store/shared-store/actions';
import * as projectActions from '../../../root-store/projects-store/actions';
import * as timesheetActions from '../../../root-store/timesheet-store/actions';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  activeTask$ = this.store$.select(taskSelectors.getActiveTask);
  completedTasksCount$ = this.store$.select(timesheetSelectors.selectNumberOfCompletedTasks);
  constructor(private store$: Store<any>, private router: Router) { }

  ngOnInit() {
    this.store$.dispatch(sharedActions.setTitle({title: 'Home'}))
    this.completedTasksCount$.subscribe(value => console.log(value))
  }

  openProjects() {
    this.router.navigate([`tabs/project`])
  }

  openTimesheets() {
    this.router.navigate([`tabs/timesheet`])
  }

  openUserProfile() {
    this.router.navigate([`tabs/timesheet`])
  }

  doRefresh(event: any) {
    // Your refresh logic here
    // For example, fetch updated data from an API
    setTimeout(() => {
      this.store$.dispatch(taskActions.loadDataRequest());
      this.store$.dispatch(projectActions.loadDataRequest());
      this.store$.dispatch(taskActions.getActiveTaskRequest());
      this.store$.dispatch(timesheetActions.loadTimesheetRequest({ date: new Date }));
      event.target.complete();
    }, 2000); // Simulating a delay for demonstration
  }

}
