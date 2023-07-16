import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as sharedSelectors from '../app/root-store/shared-store/selectors';
import * as taskActions from '../app/root-store/task-store/actions';
import * as taskSelectors from '../app/root-store/task-store/selectors';
import * as projectActions from '../app/root-store/projects-store/actions';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title$ = this.store$.select(sharedSelectors.selectTtile);
  activeTask$ = this.store$.select(taskSelectors.getActiveTask);
  constructor(private store$: Store<any>, private router: Router) {}

  ngOnInit(): void {
    this.store$.dispatch(taskActions.loadDataRequest());
    this.store$.dispatch(projectActions.loadDataRequest());
    this.store$.dispatch(taskActions.getActiveTaskRequest());
  }

  openActiveTask(id: string | undefined) {
    this.router.navigate([`tabs/task/details/${id}`])
 }
}
