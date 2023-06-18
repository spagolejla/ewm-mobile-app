import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskState } from 'src/app/root-store/task-store';
import * as taskActions from '../../../root-store/task-store/actions';
import * as taskSelectors from '../../../root-store/task-store/selectors';
import * as sharedActions from '../../../root-store/shared-store/actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent  implements OnInit {

  tasks$ = this.store$.select(taskSelectors.selectFilteredTasks);

  constructor(private store$: Store<TaskState.State>) { }

  ngOnInit() {
    this.store$.dispatch(sharedActions.setTitle({title: 'Tasks'}))
    this.store$.dispatch(taskActions.loadDataRequest())

    this.tasks$.subscribe(value => console.log(value));
  }

}
